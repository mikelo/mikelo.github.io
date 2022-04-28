function dominates(objA, objB) {
    let realLarger = false;
	for (let i = 0; i < objA.values.length; i++) {
	    if (objA.values[i] < objB.values[i]) {
			realLarger = true;
		} else if (objA.values[i] > objB.values[i]) {
			return false;
		}
	}
	return realLarger;
}

function isParetoOptimal(index, items, layer) {
	let toCompare = items[index];
	for (let i = 0; i < items.length; i++) {
		if (i != index
				&& items[i].rank >= layer
				&& dominates(items[i], toCompare)) {
			return false;
		}
	}
	return true;
}

function determineParetoRanking(items) {
	for (let i = 0; i < items.length; i++) {
		items[i].rank = items.length + 1;
	}
	for (let layer = 1; layer <= items.length; layer++) {
		let hadOptimal = false;
		for (let i = 0; i < items.length; i++) {
			if (items[i].rank > layer && isParetoOptimal(i, items, layer)) {
				items[i].rank = layer;
				hadOptimal = true;
			}
		}
		if (!hadOptimal) {
			break;
		}
	}
}

// Standard Normal variate using Box-Muller transform.
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function createRandomizedCopy(items, columnSettings) {
	//deep clone
	let ret = JSON.parse(JSON.stringify(items));
	for (let i = 0; i < ret.length; i++) {
		for (let j = 0; j < ret[i].values.length; j++) {
			if (columnSettings[j].maximize) {
				ret[i].values[j] *= -1;
			}
			ret[i].values[j] += randn_bm() * columnSettings[j].errorWidth;
		}
	}
	return ret;
}

function probabilisticParetoRanking(items, columnSettings) {
	for (let i = 0; i < items.length; i++) {
		items[i].rank = 0; 
	}
	let iterCount = 1000;
	for (let i = 0; i < iterCount; i++) {
		let copy = createRandomizedCopy(items, columnSettings)
		determineParetoRanking(copy);
		for (let i = 0; i < items.length; i++) {
			items[i].rank += copy[i].rank;
		}
	}
	for (let i = 0; i < items.length; i++) {
		items[i].rank /= iterCount; 
	}
}

function parseItems(data) {
	let lines = data.split("\n");
	let ret = []
	for (let i = 1; i < lines.length; i++) { 
		if (lines[i].trim().length == 0) {
			continue;
		}
		let fields = lines[i].split(";");
		let arr = [];
		for (let j = 1; j < fields.length; j++) { 
			arr.push(Number.parseFloat(fields[j]));
		}
		let item = {
			name: fields[0],
			values: arr,
			rank: -1
		};
		ret.push(item);
	}
	return ret;
}

function parseColumnNames(data) {
	let lines = data.split("\n");
	return lines[0].split(";");
}

function createColumnSetting(columnName, direction, width) {
	return {
		name: columnName,
		maximize: direction.toLowerCase().includes("max"),
		errorWidth: Number.parseFloat(width)
	};
}

function parseColumnSettings(colSetText) {
	let lines = colSetText.split("\n");
	let ret = {};
	for (let i = 1; i < lines.length; i++) {
		if (lines[i].trim().length == 0) {
			continue;
		}
		let fields = lines[i].trim().split(";");
		ret[fields[0]] = createColumnSetting(fields[0], fields[1], fields[2]);
	}
	return ret;
}

function printColumnSettings(columnSettings) {
	let text = "column;direction;error width\n";
	for (let i = 0; i < columnSettings.length; i++) { 
		let c = columnSettings[i];
		text += c.name + (c.maximize ? ";max;" : ";min;") + c.errorWidth + "\n";
	}
	$("#itemColumnSettings").val(text);
}

function printResult(items, columnNames) {
	let text = "";
	for (let i = 0; i < columnNames.length; i++) {
		text += columnNames[i] + ";";
	}
	text += "Pareto Rank\n";
	for (let i = 0; i < items.length; i++) {
		text += items[i].name + ";";
		for (let j = 0; j < items[i].values.length; j++) {
			text += items[i].values[j] + ";";
		}
		text += items[i].rank + "\n";
	}
	$("#itemOutput").val(text);
}

function doRanking() {
	let data = $("#itemInput").val();
	let items = parseItems(data);
	
	let colSetText = $("#itemColumnSettings").val();
	let columnSettingMap = parseColumnSettings(colSetText);
	
	let columnNames = parseColumnNames(data);
	let columnSettings = [];
	for (let i = 1; i < columnNames.length; i++) {
		if (columnSettingMap[columnNames[i]]) {
			columnSettings.push(columnSettingMap[columnNames[i]]);
		} else {
			columnSettings.push(createColumnSetting(columnNames[i], "max", "1.0"));
		}
	}
	
	printColumnSettings(columnSettings);
	
	probabilisticParetoRanking(items, columnSettings);
	
	printResult(items, columnNames);
}
