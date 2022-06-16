const wordToPos = {'of':'i',
'she':'p',
'do':'v',
'they':'p',
'him':'p',
'could':'v',
'about':'i',
'man':'n',
'there':'e',
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
'v': ['do', 'could', 'hand', 'call', 'work', 'begin', 'help', 'smile', 'die', 'stay', 'grow', 'listen', 'break', 'touch', 'imagine', 'rise', 'cry', 'guess', 'explain', 'lift', 'stick', 'save', 'shout', 'slide', 'ride', 'scream', 'enjoy', 'share', 'kick', 'discover', 'circle', 'travel', 'surprise', 'shift', 'escape', 'struggle', 'pop', 'slow', 'suffer', 'note', 'extend', 'hire', 'taste', 'straighten', 'excuse', 'separate', 'bow', 'admire'],
'r': ['about', 'in', 'as', 'maybe', 'very', 'much', 'nearly', 'simply', 'through', 'tomorrow', 'slightly', 'bit', 'anywhere', 'otherwise', 'upstairs', 'absolutely', 'thus'],
'n': ['man', 'back', 'car', 'story', 'mouth', 'office', 'sister', 'fact', 'fire', 'seat', 'neck', 'wind', 'top', 'river', 'tooth', 'police', 'animal', 'trouble', 'crowd', 'mile', 'hill', 'shit', 'movie', 'smell', 'heat', 'knife', 'narrator', 'need', 'lake', 'member', 'wine', 'meeting', 'grandmother', 'situation', 'set', 'forest', 'effort', 'doorway', 'stranger', 'fall', 'list', 'presence', 'difference', 'century', 'photograph', 'muscle', 'eyebrow', 'enemy', 'jeans', 'jaw', 'desire', 'race', 'sword', 'garage', 'apple', 'can', 'stream', 'issue', 'lie', 'scent', 'mark', 'snake', 'worker', 'chapter', 'author', 'van', 'cave', 'sofa', 'nail', 'roll', 'grave', 'cloth', 'connection', 'furniture', 'self', 'avenue', 'judge', 'whisper', 'youth', 'horn'],
'e': ['there'],
'a': ['no', 'every', 'its', 'the', 'a', 'an'],
'c': ['though', 'whether', 'nor', 'far','and'],
'u': ['yes','oh','alas','ah','hooray'],
'd': ['both','many', 'fewer', 'some', 'these'],
'm': ['four', 'second','first'],
'j': ['blue', 'full', 'whole', 'open', 'best', 'hard', 'low', 'certain', 'poor', 'angry', 'glad', 'pretty', 'local', 'smart', 'interested', 'just', 'slight', 'extra', 'comfortable', 'necessary', 'grand', 'brief', 'giant', 'visible', 'current', 'pregnant', 'female', 'silly']
};

const posToNextPos={
    'd':['n'],
    'i':['n','a'],
    'r':['r','m','e', 'j','a','n','c','v'],
    'm':['j','a','n','v'],
    'p':['r','v'],
    'e':['v','i','r'],
    'j':['n','n','j'],
    'a':['d','r','m','j','n','v'],
    'n':['v','i','r','e','j','a','n','c'],
    'c':['n','v','j','r','m'],
    'u':['n','i','a'],
    'v':['i','n','r','c'],
};

const pos=['d', 'i', 'r', 'm', 'p', 'e', 'j', 'a', 'n', 'c', 'u', 'v'];

const validStartingPos = pos;


function generate_random_clause(length){
    let line = '';
    let posList = [];
    let posKey = pos[Math.floor(Math.random() * pos.length)];
    for (let i = 0; i < length; i++) {
        posList.push(posKey);
        const validWords = posToWords[posKey];
        line += validWords[Math.floor(Math.random() * validWords.length)] + " ";
        
        const potentialNextPOS = posToNextPos[posKey];
        posKey = potentialNextPOS[Math.floor(Math.random() * potentialNextPOS.length)];
    }
    console.log(posList);
    return line.trim();
}

function generate_poetry(num_lines, max_line_length) {
    let poem = [];
    for (let i = 0; i < num_lines; i++) {
        poem.push(generate_random_clause(Math.floor(Math.random() * max_line_length)));
    }
    return poem.join('<br/>');
}

let poetry;

function onSubmit(){
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
}

const posToExamples = {
	'd': ['many', 'fewer', 'some', 'these'],
	'i': ['of', 'without', 'inside'],
	'r': ['about', 'in', 'as'],
	'm': ['four', 'second', 'first'],
	'p': ['she', 'they', 'him'],
	'e': ['there'],
	'j': ['blue', 'full', 'whole', 'open'],
	'a': ['no', 'every', 'its', 'the'],
	'n': ['man', 'back', 'car', 'story'],
	'c': ['though', 'whether', 'and'],
	'u': ['yes','oh'],
	'v': ['do', 'could', 'hand', 'call'],
}