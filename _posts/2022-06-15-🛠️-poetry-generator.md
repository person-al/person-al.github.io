---
category: "\U0001F6E0️"
date: 2022-06-15
layout: post
tags:
- PortOfDetection
title: "\U0001F6E0️ poetry generator"
---

As part of my work on [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}), I've started exploring generated text art. This page allows you to join me in that exploration.
#### Change the settings below and generate some poetry!
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
	<p>(More advanced settings coming soon :) )</p>
	<br/>
	<!-- <div><h4 style="display: inline">Advanced Settings:</h4> <button style="display: inline" type="button" onclick="return showOrHideAdvanced()">(Show/Hide)</button></div>
	<div id="advanced_settings" style="display: none">Hello</div>
	<br/><br/> -->
	<input type="submit" value="Generate"/>
</form>

<h3>Poetry:</h3>
<p id="poem">Fill out the form below to see your poem</p>
<br/>
<br/>
<div id="send_me_box" style="display: none">Like what you made?
<a id="send_me_link">Send Me Your Poem</a> or <a href="https://twitter.com/intent/tweet?via={{site.twitter_username}}&url={{ site.url | append: page.url | append: '?ref=twitter_share' | url_encode}}">tweet at me</a></div>