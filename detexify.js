function detexify() {
	var text = $("#textInput").val() + " ";
	
	text = removeComments(text);
	text = restrictToDocument(text);
	text = replaceNbSpaces(text);
	text = removeLineBreaksInSentences(text);
	text = text.replace(/\\cite\{[^\}]*\}/g, "[1]");
	text = text.replace(/\\citet\{[^\}]*\}/g, "Smith (2018)");
	text = text.replace(/\\citep\{[^\}]*\}/g, "(Smith, 2018)");
	text = text.replace(/\\ref\{[^\}]*\}/g, "42");
	text = text.replace(/\\eg/g, "e.g., ");
	text = text.replace(/\\ie/g, "i.e., ");
	text = text.replace(/``/g, "\"");
	text = text.replace(/''/g, "\"");
	text = text.replace(/\\\\/g, "\n");
	text = text.replace(/\\%/g, "%");
	text = text.replace(/\\label\{[^\}]*\}/g, "");
	text = text.replace(/\\vspace\{[^\}]*\}/g, "");
	text = text.replace(/\\rowcolor\{[^\}]*\}/g, "");
	text = text.replace(/\\hline/g, "");
	text = text.replace(/\\emph\{([^\}]*)\}/g, "$1");
	text = text.replace(/\\textbf\{([^\}]*)\}/g, "$1");
	text = text.replace(/\\section\{([^\}]*)\}/g, "== $1");
	text = text.replace(/\\subsection\{([^\}]*)\}/g, "=== $1");
	text = text.replace(/\\subsubsection\{([^\}]*)\}/g, "=== $1");
	
	$("#textOutput").val(text)
}

function removeComments(text) {
	let inComment = false;
	let escape = false;
	let ret = "";
	for (let ch of text) {
		if (inComment) {
			if (ch == "\n") {
				inComment = false;
			}
		} else if (escape) {
			ret += ch;
			escape = false;
		} else {
			if (ch == "\\") {
				ret += ch;
				escape = true;
			} else if (ch == "%") {
				inComment = true;
			} else {
				ret += ch;
			}
		}
	}
	return ret;
}

function restrictToDocument(text) {
	let startMarker = "\\begin{document}";
	let endMarker = "\\end{document}";
	if (text.indexOf(startMarker) >= 0 && text.indexOf(endMarker) >= 0) {
		let startIndex = text.indexOf(startMarker) + startMarker.length;
		let endIndex = text.indexOf(endMarker);
		return text.substring(startIndex, endIndex);
	} else {
		return text;
	}
}

function replaceNbSpaces(text) {
	return text.replace(/~/g, " ");
}

function removeLineBreaksInSentences(text) {
	//TODO implement
	return text;
}

