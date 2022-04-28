var questions = [
	{q: 'Wie lang ist ein Airbus A380-800 in m?', a: 72.7},
	{q: 'Wie hoch ist der Mount Everest in m?', a: 8848},
	{q: 'In welchem Jahr wurde der FC Bayern München das erste Mal Meister der 1. Fußball-Bundesliga?', a: 1969},
	{q: 'In welchem Jahr hat Boris Becker das erste das Finale in Wimbledon gewonnen?', a: 1985},
	{q: 'In welchem Jahr wurde Alan Turing geboren?', a: 1912},
	{q: 'Wie groß ist die Fläche der Stadt Paris, in Quadratkilometern?', a: 105.34},
	{q: 'Wie hoch ist der höchste Berg in Hannover (in m ü. N.n.)?', a: 122},
	{q: 'Wie hoch liegt der tiefste Punkt von Hannover (in m ü. N.n.)?', a: 44},
	{q: 'In welchem Jahr wurde das \'North Jutland Artillery Regiment\' der dänischen Armee aufgelöst?', a: 2000},
	{q: 'In welchem Jahr wurde das Junín-3 Ölfeld entdeckt?', a: 2009},
	{q: 'Wie lang ist der Nil, in km?', a: 6650},
	{q: 'Wie viel Prozent mehr Energie benötigt ein Kühlschrank, der auf 6 statt 7 Grad Celsius kühlt?', a: 6},
	{q: 'Wie viele Schweizer Franken bekam man für einen Euro am 14.01.2022?', a: 1.0435},
	{q: 'Wie viele Euro betrug das durchschnittliche Monats-Bruttoeinkommen eines Vollzeitangestellten in Deutschland in 2020?', a: 3975},
	{q: 'Wie viele Euro betrug das durchschnittliche Monats-Bruttoeinkommen eines männlichen Vollzeitangestellten in Deutschland in 2020?', a: 4146},
	{q: 'Wie viele Euro betrug das durchschnittliche Monats-Bruttoeinkommen einer weiblichen Vollzeitangestellten in Deutschland in 2020?', a: 3578},
	{q: 'Wie viel Prozent betrug der Anteil der Deutschen Post AG am deutschen Briefmarkt in 2019?', a: 86},
	{q: 'Wie viele Briefe hat die Deutsche Post AG in 2020 transportiert (in Milliarden)?', a: 14.3},
	{q: 'Um wie viel Prozent ist der Aktienindex DAX in 2021 gestiegen?', a: 15.8},
	{q: 'Wie viele Einwohner hatte Deutschland im Jahr 2021?', a: 83129285},
	{q: 'Wie hoch war die Bevölkerungsdichte (Einwohner pro Quadratkilometer) in Deutschland in 2021?', a: 232},
	{q: 'Welchen Platz hatte Deutschland im \'Human Development Index\' in 2019?', a: 6},
	{q: 'Wie hoch war die Geburtenrate in Deutschland in 2018?', a: 1.57},
	{q: 'Wie viele Einwohner hatte Niedersachsen in 2021?', a: 8003421},
	{q: 'Wie hoch war die Bevölkerungsdichte (Einwohner pro Quadratkilometer) in Niedersachsen in 2020?', a: 168},
	{q: 'Wie viel Prozent betrug die Arbeitslosenquote in Niedersachsen im Januar 2022?', a: 5.3},
	{q: 'Wie viele Commits auf den Master-Branch des GitHub-Repositories von Checkstyle gab es am 30.01.2022?', a: 4},
	{q: 'Wie viele unterschiedliche Committer hatte das GitHub-Repository von Apache Tomcat insgesamt bis zum 01.02.2022?', a: 72},
	{q: 'Wie breit (kürzere Seite) ist ein Blatt A4-Papier in mm?', a: 210},
	{q: 'Wie hoch (längere Seite) ist ein Blatt A4-Papier in mm?', a: 297},
	{q: 'Welche elektrische Leistung benötigt eine AMD Ryzen 7 5800X 3.8 GHz CPU (in Watt)?', a: 105},
	{q: 'Welchen Anteil der Erststimmen erhielt die CDU in der deutschen Bundestagswahl 2021?', a: 22.5},
	{q: 'Wie groß war der größte Mensch der Welt 2015 (in cm)?', a: 251},
	{q: 'Wie viele Liter Bier trank jeder Deutsche im Schnitt im Jahr 2020?', a: 86.9},
	{q: 'Welches ist die maximale Größe des \'data content\' eines IPv4-Pakets in Byte?', a: 65515},
	{q: 'Welches ist die maximale Größe eines Ethernet-Pakets (MTU + Header) in Bytes?', a: 1518},
	{q: 'Wie groß ist der Header eines IPv6-Pakets in Bytes?', a: 40},
	{q: 'Wie viele Milliliter Duschgel enthält eine handelsübliche Packung \'Nivea Men Sport\'?', a: 250},
	{q: 'Wie viele Gramm Fett sind in 100g Butter enthalten?', a: 81},
	{q: 'Wie viele Kinder und Jugendliche unter 18 Jahren lebten im Dezember 2020 in Deutschland (in Millionen)?', a: 13.75},
	{q: 'Wie viel Volumenprozent Alkohol enthält Herrenhäuser Pilsener?', a: 4.9},
	{q: 'Wie viele Versicherungsunternehmen (unter Bundesaufsicht) gab es 2020 in Deutschland?', a: 523},
	{q: 'Wie viele Seiten hat das Buch \'Herr Lehmann\' von Sven Regener (Taschenbuch, 2003, 29. Auflage)?', a: 285},
	{q: 'Wie viele Richter sind am Landgericht Frankfurt am Main beschäftigt?', a: 140},
	{q: 'Wie viele Opern komponierte Wolfgang Amadeus Mozart?', a: 21},
	{q: 'Wie viele Minuten dauert die Kinofassung des Films \'Der Herr der Ringe: Die Gefährten\'?', a: 171},
	{q: 'Wie hoch, in US-Dollar, waren die Produktionskosten des Films \'Bohemian Rhapsody\' (2018)?', a: 52000000},
	{q: 'Wie viele Zähne hat ein Hund?', a: 42},
	{q: 'Wie viel Euro Pfand müssen für eine 1 Liter PET-Mehrwegflasche Limonade gezahlt werden?', a: 0.15},
	{q: 'Wie viele Gramm Zucker sind in einem Liter Coca-Cola enthalten?', a: 106},
];
var lowerAnswers;
var upperAnswers;
var index;

function startCalibration() {
	index = 0;
	lowerAnswers = [];
	upperAnswers = [];
	shuffleQuestions();

	showCurrentQuestion();

	$("#start").hide();
	$("#output").hide();
	$("#estimation").show();
}

function shuffleQuestions() {
    var j, x, i;
    for (i = questions.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questions[i];
        questions[i] = questions[j];
        questions[j] = x;
    }
}

function showCurrentQuestion() {
	$("#question").text(questions[index].q);
	$("#lower").val('');
	$("#upper").val('');
}

function enterEstimate() {
	var valid = saveCurrentEstimate();
	if (!valid) {
		return;
	}
	if (index < 9) {
		index++;
		showCurrentQuestion();
	} else {
		showResults();
	}
}

function showResults() {
	let correctCount = 0;
	let details = '<table border><th>Question</th><th>Correct value</th><th>Your lower</th><th>Your upper</th><th>Correct</th></tr>';
	for (let i = 0; i < lowerAnswers.length; i++) {
		let cv = questions[i].a;
		let isCorrect = 0;
		if (lowerAnswers[i] <= cv && upperAnswers[i] >= cv) {
			isCorrect = 1;
		}
		details += '<tr><td>'
			+ questions[i].q + '</td><td>'
			+ cv + '</td><td>'
			+ lowerAnswers[i] + '</td><td>'
			+ upperAnswers[i] + '</td><td>'
			+ isCorrect + '</td></tr>';
		correctCount += isCorrect;
	}
	details += '</table>';

	$("#correctEstimates").text(correctCount);
	$("#resultTable").html(details);

	if (correctCount < 7) {
		$("#bad").show();
		$("#ok").hide();
		$("#perfect").hide();
		$("#underconfident").hide();
	} else if (correctCount < 9) {
		$("#bad").hide();
		$("#ok").show();
		$("#perfect").hide();
		$("#underconfident").hide();
	} else if (correctCount > 9) {
		$("#bad").hide();
		$("#ok").hide();
		$("#perfect").hide();
		$("#underconfident").show();
	} else {
		$("#bad").hide();
		$("#ok").hide();
		$("#perfect").show();
		$("#underconfident").hide();
	}

	$("#estimation").hide();
	$("#output").show();
}

function saveCurrentEstimate() {
	var lower = $("#lower").val();
	var upper = $("#upper").val();
	if (lower === '') {
		alert('Please enter a lower bound!');
		return false;
	}
	if (upper === '') {
		alert('Please enter an upper bound!');
		return false;
	}
	if (Number(lower) > Number(upper)) {
		alert('The lower bound should not be greater than the upper bound!');
		return false;
	}
	lowerAnswers.push(Number(lower));
	upperAnswers.push(Number(upper));
	return true;
}


