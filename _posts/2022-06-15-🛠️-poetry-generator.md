---
category: "\U0001F6E0️"
date: 2022-06-15
last_modified_at: 2022-06-16
layout: post
tags:
- PortOfDetection
title: "\U0001F6E0️ poetry generator"
---

As part of my work on [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}), I've started exploring generated text art. This page allows you to join me in that exploration.
## How it works
Currently the system is as follows:
1. I have a list of words categorized by part of speech
2. I have a mapping of parts of speech to other parts of speech (e.g. "a noun can be followed by an adverb or a verb")
3. For each line of poetry, the system[^1]:
	1. picks a random starting word
	2. based on the part of speech of that word, it picks a random follow-up part of speech (e.g. "the first word was a noun, let's find an adverb next")
	3. based on the selected part of speech, pick a random next word
	4. go back to step 2 until the line is over

[^1]: You can see the javascript code itself [here](/assets/js/poetry_generator.js)

Soon, I'd like to surface different controls on this page to allow you to surface better algorithms than the one above. But for now, I wanted to put this up and get feedback. Let me know what you think!

## Change the settings below and generate some poetry!
<script type='text/javascript' src="/assets/js/poetry_generator.js"></script>
<script>
	let num_lines;
	let max_words;
	function getParameters() {
		let paramString = urlString.split('?')[1];
		let queryString = new URLSearchParams(paramString);
		for(let pair of queryString.entries()) {
			console.log("Key is:" + pair[0]);
			console.log("Value is:" + pair[1]);
		}
	}
</script>
<form action="#" onsubmit="onSubmit(); return false;">
	<label for="num_lines">Number of lines in poem:</label>
	<input type="number" id="num_lines" name="num_lines">
	<br/>
	<label for="max_line_length">Maximum number of words in a line:</label>
	<input type="number" id="max_line_length" name="max_line_length">
	<br/>
	<div><h3 style="display: inline">Advanced Settings:</h3> <button style="display: inline" type="button" onclick="return showOrHideAdvanced()">(Show/Hide)</button></div>
	<div id="advanced_settings" style="display: none">
		<p>The algorithm picks words based on parts of speech as shown by the table below. (e.g. an adverb can be followed by another adverb or a verb, etc). You can add and remove parts of speech from the table below and then hit generate to change how the algorithm picks words. For examples for the parts of speech, see <a href="#pos_examples">here</a></p>
		<table id="interactive_pos_table"></table>
	</div>
	<br/><br/>
	<input type="submit" value="Generate"/>
</form>

<h3>Poetry:</h3>
<p id="poem">Fill out the form above to see your poem</p>
<br/>
<br/>
<div id="send_me_box" style="display: none">Like what you made?
<a id="send_me_link">Send Me Your Poem</a> or <a href="https://twitter.com/intent/tweet?via={{site.twitter_username}}&url={{ site.url | append: page.url | append: '?ref=twitter_share' | url_encode}}">tweet at me</a></div>

<a href="#advanced_settings">\< back to advanced settings</a>
<ul id="pos_examples"></ul>