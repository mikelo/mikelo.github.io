function findLongestSentences() {
	var text = $("#textInput").val() + " ";
	
	let potentialEndOfSentence = false;
	let curSentence = "";
	let wordCountInCurSentence = 0;
	let sentences = [];
	let lastWasWhitespace = false;
	for (let ch of text) {
	    if (isEndOfSentence(ch)) {
			potentialEndOfSentence = true;
			lastWasWhitespace = false;
		} else if (isWhitespace(ch)) {
			if (potentialEndOfSentence) {
				sentences.push({
					"text": curSentence,
					"count": wordCountInCurSentence + 1
				});
				curSentence = "";
				wordCountInCurSentence = 0;
			} else if (!lastWasWhitespace) {
				wordCountInCurSentence++;
			}
			potentialEndOfSentence = false;
			lastWasWhitespace = true;
		} else {
			potentialEndOfSentence = false;
			lastWasWhitespace = false;
		}
		curSentence += ch;
	}
	
	sentences.sort(cmpSentences);
	
	let lengthSum = 0;
	let count30 = 0;
	let count40 = 0;
	let count50 = 0;
	for (let i = 0; i < sentences.length; i++) {
		let cnt = sentences[i].count;
		lengthSum += cnt;
		if (cnt > 50) {
			count50++;
		}
		if (cnt > 40) {
			count40++;
		}
		if (cnt > 30) {
			count30++;
		}
	}
	
	let maxIndex = Math.min(10, sentences.length);
	let result = "Average sentence length: " + (lengthSum / sentences.length) + "<br/>"
	result += count50 + " sentences with more than 50 words<br/>";
	result += count40 + " sentences with more than 40 words<br/>";
	result += count30 + " sentences with more than 30 words<br/>";
	result += "<ul>";
	for (let i = 0; i < maxIndex; i++) {
		result += "<li>" + sentences[i].count + ": " + sentences[i].text + "</li>";
	}
	result += "</ul>";
	$("#longestSentences").html(result);
}

function isEndOfSentence(ch) {
	return ch == "." || ch == "!" || ch == "?" || ch == ":";
}

function isWhitespace(ch) {
	return ch == " " || ch == "\t" || ch == "\n";
}

function cmpSentences(a, b) {
	return b.count - a.count;
}

