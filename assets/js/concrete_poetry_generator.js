class Node {
  constructor(id, left, right) {
    this.left = left;
    this.right = right;
    this.id = id;
  }

  value() {
    return document.getElementById(this.id).value;
  }

  highlight() {
  	document.getElementById(this.id).style.borderColor = "red";
  	document.getElementById(this.id).style.borderStyle = "dotted";
  }

  removeHighlight() {
  	document.getElementById(this.id).style.borderColor = null;
  	document.getElementById(this.id).style.borderStyle = null;
  }

  toString() {
  	return this.value();
  }
}

// Everything wraps around - 128 options
const tfive_w = new Node("9-1", null, null);
const tfour_w = new Node("8-2", tfive_w, null);
const tthree_w = new Node("8-1", tfive_w, null);
const ttwo_w = new Node("7-3", tfour_w, tthree_w);
const tone_w = new Node("7-2", tthree_w, tfour_w);
const twenty_w = new Node("7-1", tfour_w, tthree_w);
const ninet_w = new Node("6-4", ttwo_w, twenty_w);
const eightt_w = new Node("6-3", tone_w, ttwo_w);
const sevent_w = new Node("6-2", twenty_w, tone_w);
const sixt_w = new Node("6-1", ttwo_w, twenty_w);
const fift_w = new Node("5-5", ninet_w, sixt_w);
const fourt_w = new Node("5-4", eightt_w, ninet_w);
const thirt_w = new Node("5-3", sevent_w, eightt_w);
const twelve_w = new Node("5-2", sixt_w, sevent_w);
const eleven_w = new Node("5-1", ninet_w, sixt_w);
const ten_w = new Node("4-4", fourt_w, fift_w);
const nine_w = new Node("4-3", thirt_w, fourt_w);
const eight_w = new Node("4-2", twelve_w, thirt_w);
const seven_w = new Node("4-1", eleven_w, twelve_w);
const six_w = new Node("3-3", nine_w, ten_w);
const five_w = new Node("3-2", eight_w, nine_w);
const four_w = new Node("3-1", seven_w, eight_w);
const three_w = new Node("2-2", five_w, six_w);
const two_w = new Node("2-1", four_w, five_w);
const one_w = new Node("1-1", two_w, three_w);

// No wrapping - 70 options
const tfive = new Node("9-1", null, null);
const tfour = new Node("8-2", tfive, null);
const tthree = new Node("8-1", null, tfive);
const ttwo = new Node("7-3", tfour, null);
const tone = new Node("7-2", tthree, tfour);
const twenty = new Node("7-1", null, tthree);
const ninet = new Node("6-4", ttwo, null);
const eightt = new Node("6-3", tone, ttwo);
const sevent = new Node("6-2", twenty, tone);
const sixt = new Node("6-1", null, twenty);
const fift = new Node("5-5", ninet, null);
const fourt = new Node("5-4", eightt, ninet);
const thirt = new Node("5-3", sevent, eightt);
const twelve = new Node("5-2", sixt, sevent);
const eleven = new Node("5-1", null, sixt);
const ten = new Node("4-4", fourt, fift);
const nine = new Node("4-3", thirt, fourt);
const eight = new Node("4-2", twelve, thirt);
const seven = new Node("4-1", eleven, twelve);
const six = new Node("3-3", nine, ten);
const five = new Node("3-2", eight, nine);
const four = new Node("3-1", seven, eight);
const three = new Node("2-2", five, six);
const two = new Node("2-1", four, five);
const one = new Node("1-1", two, three);

function onSubmit(){
	const isWrap = document.getElementById("wrap").checked;
	let sentences = [];
	if (isWrap) {
		sentences = Array.from(new Set(dfsGenerateSentences(one_w)));
	} else {
		sentences = Array.from(new Set(dfsGenerateSentences(one)));
	}

	const chosenSentence = sentences[Math.floor(Math.random()*sentences.length)];
	document.getElementById("poem").innerHTML = `<mark>${chosenSentence.join(" ")}</mark>`;
	chosenSentence.forEach(val => val.highlight());
	
	let htmlVal = "<ol>";
	sentences.forEach((sentence) => {
		htmlVal += `<li>${sentence.join(" ")}</li>`
	});
	htmlVal += "</ol>";
	document.getElementById("all_poems").innerHTML = htmlVal;
	setMailToLink(poem, htmlVal);
}

function dfsGenerateSentences(node, path = []){
	node.removeHighlight(); // undo any highlighting we may have done before
	let all_paths = [];
	if (node.left === null && node.right === null){
		all_paths.push(path.concat(node));
	}
	if (node.left !== null){
		all_paths = all_paths.concat(dfsGenerateSentences(node.left, path.concat(node)));
	}
	if (node.right !== null){
		all_paths = all_paths.concat(dfsGenerateSentences(node.right, path.concat(node)));
	}
	return all_paths;
}

function showOrHideAllPaths(){
	const all = document.getElementById('all_poems');
	let curr = all.style.display;
	if (curr === 'block') {
		all.style.display = 'none';
	} else {
		all.style.display = 'block';
	}
}

function setMailToLink(poem, all_poems){
	const email = "person72443";
	const email_end = "@proton.me";

	var a = document.getElementById('send_me_link');
	var a_block = document.getElementById('send_me_box');
	a_block.style.display = 'block';
	a.href = `mailto:${email+email_end}?subject=Look at this poem!&body=I made the following poem:%0A${poem}%0A with the following possible options:%0A${all_poems}`;
}
