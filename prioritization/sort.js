var items;
var knownComparisons;
var missingComparisons;
var currentSortFunction;
var showResultsSorted = true;

function startRanking(rankFunction) {
	var text = $("#itemInput").val();
	var itemsRaw = text.split("\n");
	
	currentSortFunction = rankFunction;
	items = [];
	for (var i = 0; i < itemsRaw.length; i++) {
		var tr = itemsRaw[i].trim();
		
		if (tr != "" && !items.includes(tr)) {
			items.push(tr);
		}
	}
	knownComparisons = {};
	missingComparisons = [];
	$("#input").hide();
	continueRanking();
}

function continueRanking() {
	try {
		var copy = currentSortFunction(items, cmp);
		showResults(copy);
	} catch (err) {
		askForNextComparison();
	}
}

function showResults(sortedItems) {
	var res;
	if (showResultsSorted) {
		res = formatResultsSorted(sortedItems);
	} else {
		res = formatResultsWithRank(sortedItems);
	}
	$("#comparison").hide();
	$("#itemOutput").text(res);
	$("#output").show();
}

function formatResultsSorted(sortedItems) {
	var res = "";
	for (var i = 0; i < sortedItems.length; i++) {
		res += sortedItems[i] + "\n";
	}
	return res;
}

function formatResultsWithRank(sortedItems) {
	var res = "";
	for (var i = 0; i < items.length; i++) {
		res += items[i] + ";" + (sortedItems.indexOf(items[i]) + 1) + "\n";
	}
	return res;
}

function toggleDisplay() {
	showResultsSorted = !showResultsSorted;
	continueRanking();
}

function askForNextComparison() {
	$("#comparison").show();
	var key = missingComparisons.pop();
	var parts = key.split("\n");
	$("#cmp1").text(parts[0]);
	$("#cmp2").text(parts[1]);
}

function choseCmp(adjustment) {
	var t1 = $("#cmp1").text();
	var t2 = $("#cmp2").text();
	if (t1 < t2) {
		knownComparisons[t1 + "\n" + t2] = -1 * adjustment;
	} else {
		knownComparisons[t2 + "\n" + t1] = 1 * adjustment;
	}
	continueRanking();
}

function cmp(a, b) {
	if (a == b) {
		return 0;
	}
	if (b < a) {
		return -cmp(b, a);
	}
	var key = a + "\n" + b;
	if (key in knownComparisons) {
		return knownComparisons[key];
	}
	if (!missingComparisons.includes(key)) {
		missingComparisons.push(key);
	}
	throw "comparison missing";
}

function toKey(a, b) {
	if (a < b) {
		return a + "\n" + b;
	} else {
		return b + "\n" + a;
	}
}

function fullSort(arr, comparator) {
	var copy = items.slice();
	copy.sort(cmp);
	return copy;
}

function doubleOutSort(arr, comparator) {
    if (arr.length == 0) {
		return [];
	}
	console.log("start double out " + arr);
    var currentWinnerBracket = arr;
	var currentLoserBracket = [];
	var result = [];
	while (currentWinnerBracket.length > 1) {
		console.log("new round " + currentWinnerBracket + "; " + currentLoserBracket);
		var nextWinnerBracket = [];
		var nextLoserBracket = [];
		
		playMatches(currentWinnerBracket, comparator, nextWinnerBracket, nextLoserBracket);
		console.log("after winner bracket " + nextWinnerBracket + "; " + nextLoserBracket);
		currentWinnerBracket = nextWinnerBracket;

		var outInCurrentRound = [];
		do {
			playMatches(currentLoserBracket, comparator, nextLoserBracket, outInCurrentRound);
			console.log("after loser bracket " + nextWinnerBracket + "; " + nextLoserBracket);
			currentLoserBracket = nextLoserBracket;
			nextLoserBracket = [];
		} while (currentLoserBracket.length > currentWinnerBracket.length);
		
		//sort shall be stable, therefore select items in order of input array
		for (var i = arr.length - 1; i >= 0; i--) {
			if (outInCurrentRound.includes(arr[i])) {
				result.unshift(arr[i]);
			}
		}
	}
    if (currentLoserBracket.length == 0) {
		result.unshift(currentWinnerBracket[0]);
	} else {
		if (comparator(currentWinnerBracket[0], currentLoserBracket[0]) < 0) {
			result.unshift(currentLoserBracket[0]);
			result.unshift(currentWinnerBracket[0]);
		} else {
			result.unshift(currentWinnerBracket[0]);
			result.unshift(currentLoserBracket[0]);
		}
	}
	return result;
}

function playMatches(arr, comparator, winnerBuffer, loserBuffer) {
    if (arr.length % 2 == 0) {
	    for (var i = 0; i < arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i - 1], comparator, winnerBuffer, loserBuffer);
		}
	} else {
		winnerBuffer.push(arr[0]);
	    for (var i = 1; i <= arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i], comparator, winnerBuffer, loserBuffer);
		}
	}
}

function playMatch(a, b, comparator, winnerBuffer, loserBuffer) {
	console.log("playing " + a + " vs " + b);
	if (comparator(a, b) <= 0) {
		winnerBuffer.push(a);
		loserBuffer.push(b);
	} else {
		winnerBuffer.push(b);
		loserBuffer.push(a);
	}
}
