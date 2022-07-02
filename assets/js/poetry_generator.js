const wordToPos = {'of':'i',
'she':'p',
'do':'v',
'they':'p',
'him':'p',
'could':'v',
'about':'i',
'man':'n',
'there is':'v',
'there was':'v',
'there are':'v',
'hand':'n',
'no':'a',
'call':'v',
'in':'r',
'as':'r',
'back':'n',
'work':'v',
'maybe':'r',
'very':'r',
'begin':'v',
'though':'c',
'every':'a',
'car':'n',
'without':'i',
'yes':'u',
'help':'v',
'smile':'v',
'die':'v',
'about':'r',
'story':'n',
'stay':'v',
'mouth':'n',
'grow':'v',
'much':'r',
'both':'d',
'listen':'v',
'break':'v',
'four':'m',
'office':'n',
'sister':'n',
'blue':'j',
'full':'j',
'its':'a',
'whole':'j',
'open':'j',
'fact':'n',
'best':'j',
'fire':'n',
'hard':'j',
'touch':'v',
'imagine':'v',
'rise':'v',
'seat':'n',
'cry':'v',
'guess':'v',
'inside':'i',
'explain':'v',
'second':'m',
'lift':'v',
'neck':'n',
'low':'j',
'wind':'n',
'top':'n',
'river':'n',
'stick':'v',
'tooth':'n',
'nearly':'r',
'beneath':'i',
'police':'n',
'save':'v',
'animal':'n',
'shout':'v',
'certain':'j',
'trouble':'n',
'crowd':'n',
'slide':'v',
'ride':'v',
'mile':'n',
'whether':'c',
'hill':'n',
'simply':'r',
'shit':'n',
'scream':'v',
'hand':'v',
'poor':'j',
'through':'r',
'movie':'n',
'tomorrow':'r',
'enjoy':'v',
'share':'v',
'slightly':'r',
'bit':'r',
'somebody':'p',
'nor':'c',
'smell':'n',
'kick':'v',
'heat':'n',
'knife':'n',
'discover':'v',
'angry':'j',
'narrator':'n',
'need':'n',
'because':'i',
'lake':'n',
'member':'n',
'circle':'n',
'wine':'n',
'travel':'v',
'surprise':'n',
'glad':'j',
'pretty':'j',
'meeting':'n',
'shift':'v',
'grandmother':'n',
'situation':'n',
'set':'n',
'local':'j',
'forest':'n',
'effort':'n',
'doorway':'n',
'stranger':'n',
'fall':'n',
'escape':'v',
'struggle':'v',
'list':'n',
'presence':'n',
'pop':'v',
'difference':'n',
'anywhere':'r',
'century':'n',
'photograph':'n',
'smart':'j',
'interested':'j',
'slow':'v',
'muscle':'n',
'eyebrow':'n',
'just':'j',
'enemy':'n',
'slight':'j',
'suffer':'v',
'otherwise':'r',
'jeans':'n',
'jaw':'n',
'desire':'n',
'extra':'j',
'race':'n',
'sword':'n',
'comfortable':'j',
'note':'v',
'necessary':'j',
'upstairs':'r',
'grand':'j',
'garage':'n',
'brief':'j',
'absolutely':'r',
'extend':'v',
'apple':'n',
'can':'n',
'stream':'n',
'issue':'n',
'lie':'n',
'scent':'n',
'mark':'n',
'hire':'v',
'far':'c',
'snake':'n',
'worker':'n',
'chapter':'n',
'author':'n',
'van':'n',
'taste':'v',
'giant':'j',
'another':'p',
'cave':'n',
'straighten':'v',
'visible':'j',
'excuse':'v',
'surprise':'v',
'sofa':'n',
'nail':'n',
'roll':'n',
'separate':'v',
'grave':'n',
'cloth':'n',
'bow':'v',
'connection':'n',
'furniture':'n',
'self':'n',
'current':'j',
'avenue':'n',
'judge':'n',
'pregnant':'j',
'whisper':'n',
'youth':'n',
'female':'j',
'admire':'v',
'thus':'r',
'horn':'n',
'silly':'j',
'circle':'v'};

const posToWords = {
'i': ['of', 'without', 'inside', 'beneath', 'because','with','around','under','above','next to'],
'p': ['she', 'they', 'him', 'somebody', 'another'],
'v': ['there is','there was','there are','do', 'could', 'hand', 'call', 'work', 'begin', 'help', 'smile', 'die', 'stay', 'grow', 'listen', 'break', 'touch', 'imagine', 'rise', 'cry', 'guess', 'explain', 'lift', 'stick', 'save', 'shout', 'slide', 'ride', 'scream', 'enjoy', 'share', 'kick', 'discover', 'circle', 'travel', 'surprise', 'shift', 'escape', 'struggle', 'pop', 'slow', 'suffer', 'note', 'extend', 'hire', 'taste', 'straighten', 'excuse', 'separate', 'bow', 'admire'],
'r': ['about', 'in', 'as', 'maybe', 'very', 'much', 'nearly', 'simply', 'through', 'tomorrow', 'slightly', 'bit', 'anywhere', 'otherwise', 'upstairs', 'absolutely', 'thus'],
'n': ['man', 'back', 'car', 'story', 'mouth', 'office', 'sister', 'fact', 'fire', 'seat', 'neck', 'wind', 'top', 'river', 'tooth', 'police', 'animal', 'trouble', 'crowd', 'mile', 'hill', 'shit', 'movie', 'smell', 'heat', 'knife', 'narrator', 'need', 'lake', 'member', 'wine', 'meeting', 'grandmother', 'situation', 'set', 'forest', 'effort', 'doorway', 'stranger', 'fall', 'list', 'presence', 'difference', 'century', 'photograph', 'muscle', 'eyebrow', 'enemy', 'jeans', 'jaw', 'desire', 'race', 'sword', 'garage', 'apple', 'can', 'stream', 'issue', 'lie', 'scent', 'mark', 'snake', 'worker', 'chapter', 'author', 'van', 'cave', 'sofa', 'nail', 'roll', 'grave', 'cloth', 'connection', 'furniture', 'self', 'avenue', 'judge', 'whisper', 'youth', 'horn'],
'a': ['no', 'every', 'its', 'the', 'a', 'an'],
'c': ['though', 'whether', 'nor', 'far','and'],
'u': ['yes','oh','alas','ah','hooray'],
'd': ['both','many', 'fewer', 'some', 'these'],
'm': ['four', 'second','first'],
'j': ['blue', 'full', 'whole', 'open', 'best', 'hard', 'low', 'certain', 'poor', 'angry', 'glad', 'pretty', 'local', 'smart', 'interested', 'just', 'slight', 'extra', 'comfortable', 'necessary', 'grand', 'brief', 'giant', 'visible', 'current', 'pregnant', 'female', 'silly'],
'end': [''],
};

let posToNextPos={
	'd':['n'],
	'i':['n','a'],
	'r':['r','a','c','v'],
	'm':['j','n','v'],
	'p':['r','v'],
	'j':['n','n','j'],
	'a':['r','j','n','v'],
	'n':['v','r','j','a','c'],
	'c':['n','v','j','r'],
	'u':['n','i','a'],
	'v':['i','n','r','c'],
	'end':['end'],
}

const pos=['d', 'i', 'r', 'm', 'p', 'j', 'a', 'n', 'c', 'u', 'v'];

const validStartingPos = pos;


function getParameters() {
	let paramString = window.location.search;
	let queryString = new URLSearchParams(paramString);
	for(let pair of queryString.entries()) {
		if (pair[0] === "num_lines") {
			num_lines = parseInt(pair[1])
			document.getElementById("num_lines").value = num_lines
		}
		if (pair[0] == "max_line_length") {
			max_words = parseInt(pair[1])
			document.getElementById("max_line_length").value = max_words
		}
	}
}

function generate_random_clause(length){
    let line = '';
    let posList = [];
    let posKey = pos[Math.floor(Math.random() * pos.length)];
    for (let i = 0; i < length; i++) {
        posList.push(posToName[posKey]);
        const validWords = posToWords[posKey];
        line += `<span class="posword-${posKey}">${validWords[Math.floor(Math.random() * validWords.length)]}</span> `;
        
        const potentialNextPOS = posToNextPos[posKey];
        posKey = potentialNextPOS[Math.floor(Math.random() * potentialNextPOS.length)];
    }
    console.log(posList);
    return line.trim();
}

function generate_poetry(num_lines, max_line_length) {
    let poem = [];
    console.log("PARTS OF SPEECH LIST FOR CURRENT POEM:")
    for (let i = 0; i < num_lines; i++) {
        poem.push(generate_random_clause(Math.floor(Math.random() * max_line_length)));
    }
    return poem.join('<br/>');
}

function populatePosToWords(){
	if (document.getElementById('add_words_pos_table').childElementCount <= 0){
		return;
	}
	for (let i=0; i<pos.length; i++) {
		const k = pos[i];
		posToWords[k] = document.getElementById(`posToWordList-${k}`).value.split(", ");
	}
}

let poetry;

function onSubmit(){
	populatePosToWords();
	const poem = generate_poetry(document.getElementById('num_lines').value,document.getElementById('max_line_length').value);
	document.getElementById("poem").innerHTML = poem;
	setMailToLink(poem);
}

function showOrHideAdvanced(){
	const advanced = document.getElementById('advanced_settings');
	let curr = advanced.style.display;
	if (curr === 'block') {
		advanced.style.display = 'none';
	} else {
		advanced.style.display = 'block';
		generateWordTable();
		generatePOSTable();
	}
}

function showOrHidePosRelationships(){
	const ele = document.getElementById('interactive_pos_table');
	let curr = ele.style.display;
	if (curr === 'inline-table') {
		ele.style.display = 'none';
	} else {
		ele.style.display = 'inline-table';
	}
}

function showOrHideModifyWordBank(){
	const ele = document.getElementById('add_words_pos_table');
	let curr = ele.style.display;
	if (curr === 'inline-table') {
		ele.style.display = 'none';
	} else {
		ele.style.display = 'inline-table';
	}
}

function setMailToLink(poem){
	const settings = JSON.stringify(posToNextPos);
	const email = "person72443";
	const email_end = "@proton.me";

	var a = document.getElementById('send_me_link');
	var a_block = document.getElementById('send_me_box');
	a_block.style.display = 'block';
	a.href = `mailto:${email+email_end}?subject=Look at this poem!&body=I made the following poem:%0A${poem}%0A with the following settings:%0A${settings}`;
}

function generateWordTable(){
	const table = document.getElementById('add_words_pos_table');
	while (table.lastChild) {
        table.removeChild(table.lastChild);
    }

    const headerStyle = "font-weight: bold; font-size:17px";

	table.border = '1';
	const tableBody = document.createElement('tbody');
	table.appendChild(tableBody);

	const headerRow = document.createElement('tr');
	tableBody.appendChild(headerRow);
	const firstColumnLabel = document.createElement('td');
    firstColumnLabel.style= headerStyle;
    firstColumnLabel.appendChild(document.createTextNode('Part of Speech'));
    headerRow.appendChild(firstColumnLabel);
    
    const secondColumnLabel = document.createElement('td');
    secondColumnLabel.appendChild(document.createTextNode('Examples'));
    secondColumnLabel.style=headerStyle;
    headerRow.appendChild(secondColumnLabel);
    
    const thirdColumnLabel = document.createElement('td');
    thirdColumnLabel.width = '300';
    thirdColumnLabel.appendChild(document.createTextNode('Wordlist'));
    thirdColumnLabel.style=headerStyle;
    headerRow.appendChild(thirdColumnLabel);

	for (var k in posToNextPos) {
		const tr = document.createElement('tr');
		tableBody.appendChild(tr);
		const td = document.createElement('td');
	    // td.width = 'auto';
	    td.appendChild(document.createTextNode(`${posToName[k]}`));
	    tr.appendChild(td);

		const td2 = document.createElement('td');
	    tr.appendChild(td2);
    	td2.appendChild(document.createTextNode(`${posToExamples[k].join(', ')}`));
	    
	    const td3 = document.createElement('td');
	    const inp = document.createElement('textarea')
	    inp.style = "width: 280px;"
	    inp.type = "text"
	    inp.id = `posToWordList-${k}`
	    inp.value = `${posToWords[k].join(', ')}`
	    td3.appendChild(inp);
	    tr.appendChild(td3);
	}
}

function generatePOSTable(){
	const table = document.getElementById('interactive_pos_table');
	while (table.lastChild) {
        table.removeChild(table.lastChild);
    }

    const headerStyle = "font-weight: bold; font-size:17px";

	table.border = '1';
	const tableBody = document.createElement('tbody');
	table.appendChild(tableBody);

	const headerRow = document.createElement('tr');
	tableBody.appendChild(headerRow);
	const firstColumnLabel = document.createElement('td');
    firstColumnLabel.style= headerStyle;
    firstColumnLabel.appendChild(document.createTextNode('Part of Speech'));
    headerRow.appendChild(firstColumnLabel);
    
    const secondColumnLabel = document.createElement('td');
    secondColumnLabel.width = '300';
    secondColumnLabel.appendChild(document.createTextNode('Valid following parts of speech (click to remove)'));
    secondColumnLabel.style=headerStyle;
    headerRow.appendChild(secondColumnLabel);
    
    const thirdColumnLabel = document.createElement('td');
    thirdColumnLabel.width = '150';
    thirdColumnLabel.appendChild(document.createTextNode('Add to valid list'));
    thirdColumnLabel.style=headerStyle;
    headerRow.appendChild(thirdColumnLabel);

	for (var k in posToNextPos) {
		const tr = document.createElement('tr');
		tableBody.appendChild(tr);
		const td = document.createElement('td');
	    td.appendChild(document.createTextNode(`${posToName[k]}`));
	    tr.appendChild(td);

		const td2 = document.createElement('td');
	    tr.appendChild(td2);
	    const res = posToNextPos[k];
	    for (var i in res) {
	    	const button = document.createElement('button');
	    	button.appendChild(document.createTextNode(`${posToName[res[i]]}`));
	    	button.addEventListener('click', getRemoveFunction(res[i], k));
	    	td2.appendChild(button);
	    }

	    const td3 = document.createElement('td');
	    td3.appendChild(getPosSelect(k));
	    tr.appendChild(td3);
	}
}

function renderPosExampleList(){
	const exampleList = document.getElementById('pos_examples');
	for (var k in posToExamples) {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${posToName[k]}: ${posToExamples[k].join(', ')}`));
		exampleList.appendChild(li);
	}
}

function getPosSelect(parent){
	var selectList = document.createElement("select");
	selectList.style = 'width: 150px';
    selectList.id = `posSelect-${parent}`;
    
    //Create and append the options
    var defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.value = "";
    defaultOption.text = 'Select';
    selectList.appendChild(defaultOption);

    for (var i = 0; i < pos.length; i++) {
        var option = document.createElement("option");
        const posVal = pos[i]
        option.value = posVal;
        option.text = posToName[posVal];
        selectList.appendChild(option);
    }
    selectList.onchange = (event) => {return addToPos(event.currentTarget.value, parent)};
    return selectList
}

const getRemoveFunction = (removePOS, mainPOS) => {
	return function(){removeFromPOS(removePOS, mainPOS)};
};

function removeFromPOS(removePOS, mainPOS) {
	const curr = posToNextPos[mainPOS];
	posToNextPos[mainPOS] = curr.filter(function(val){return val !== removePOS});
	generatePOSTable();
}

function addToPos(addPOS, mainPOS) {
	posToNextPos[mainPOS].push(addPOS);
	generatePOSTable();
}

// d determiner (many, fewer, some, these)
// i preposition
// r adverb
// m number
// p pronoun
// e existential there
// j adjective
// a article/possessive
// n noun
// c conjunction
// u interjection
// v verb

const posToName = {
	'd': 'determiner',
	'i': 'preposition',
	'r': 'adverb',
	'm': 'number',
	'p': 'pronoun',
	'e': 'existential there',
	'j': 'adjective',
	'a': 'article/possessive',
	'n': 'noun',
	'c': 'conjunction',
	'u': 'interjection',
	'v': 'verb',
	'end': 'end of sentence',
}

const posToExamples = {
	'd': ['many', 'fewer', 'some', 'these'],
	'i': ['of', 'without', 'inside'],
	'r': ['about', 'in', 'as'],
	'm': ['four', 'second', 'first'],
	'p': ['she', 'they', 'him'],
	'j': ['blue', 'full', 'whole', 'open'],
	'a': ['no', 'every', 'its', 'the'],
	'n': ['man', 'back', 'car', 'story'],
	'c': ['though', 'whether', 'and'],
	'u': ['yes','oh'],
	'v': ['do', 'could', 'hand', 'call'],
	'end': [],
}



getParameters();
renderPosExampleList();