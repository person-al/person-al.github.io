---
category: "\U0001F330"
date: 2022-06-15
last_modified_at: 2022-06-30
layout: post
tags:
- PortOfDetection
title: "\U0001F330 random poetry generator"
---

As mentioned in [🛠️ poetry generator]({% post_url 2022-06-15-🛠️-poetry-generator %}), I've been exploring different ways of generating text. The following interactive art piece allows you to select your own rules for how poetry should be structured, and then generate a poem of your own! Give it a try and let me know how it goes.
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

<!-- <style>
       .posword-d {
           border-bottom: 1px solid #ee4035;
       }
       .posword-i {
           border-bottom: 1px solid #ff598f;
       }
       .posword-r {
           border-bottom: 1px solid #f37736;
       }
       .posword-m {
           border-bottom: 1px solid #fd8a5e;
       }
       .posword-p {
           border-bottom: 1px solid #fdf498;
       }
       .posword-j {
           border-bottom: 1px solid #e0e300;
       }
       .posword-a {
           border-bottom: 1px solid #7bc043;
       }
       .posword-n {
           border-bottom: 1px solid #01dddd;
       }
       .posword-c {
           border-bottom: 1px solid #00bfaf;
       }
       .posword-u {
           border-bottom: 1px solid #0392cf;
       }
       .posword-v {
           border-bottom: 1px solid purple;
       }
</style> -->


<form action="#" onsubmit="onSubmit(); return false;">
	<label for="num_lines">Number of lines in poem:</label>
	<input type="number" id="num_lines" name="num_lines">
	<br/>
	<label for="max_line_length">Maximum number of words in a line:</label>
	<input type="number" id="max_line_length" name="max_line_length">
	<br/>
	<div><h3 style="display: inline">Advanced Settings:</h3> <button style="display: inline" type="button" onclick="return showOrHideAdvanced()">(Show/Hide)</button></div>
	<div id="advanced_settings" style="display: none">
			<h4>Modify the word bank</h4>
			<p>I've created a list of potential words myself, but here you can change the words entirely as desired</p>
			<button style="display: inline" type="button" onclick="return showOrHideModifyWordBank()">Show/Hide Table</button>
			<table id="add_words_pos_table" style="display: none"></table>

			<h4>Part of speech relationships</h4>
			<p>The algorithm picks words based on parts of speech as shown by the table below. (e.g. an adverb can be followed by another adverb or a verb, etc). You can add and remove parts of speech from the table below and then hit generate to change how the algorithm picks words. For examples for the parts of speech, see <a href="#pos_examples">here</a></p>
			<button type="button" onclick="return showOrHidePosRelationships()">Show/Hide Table</button>
			<table id="interactive_pos_table" style="display: none"></table>
	</div>
	<br/><br/>
	<input type="submit" value="Generate"/>
</form>

<h3>Poetry:</h3>
<p id="poem" style="border: 1px solid #cceeee; border-radius:6px; padding: 10px">Fill out the form above to see your poem</p>
<div id="send_me_box" style="display: none">Like what you made?
<a id="send_me_link">Send Me Your Poem</a> or <a href="https://twitter.com/intent/tweet?via={{site.twitter_username}}&url={{ site.url | append: page.url | append: '?ref=twitter_share' | url_encode}}">tweet at me</a></div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<a href="#advanced_settings">\< back to advanced settings</a>
<ul id="pos_examples"></ul>

<script type='text/javascript' src="/assets/js/poetry_generator.js"></script>

### Updates
- **1 July 2022:** New settings! You can now create your own word dictionary
- **30 Jun 2022:** Moved this from the main [🛠️ poetry generator]({% post_url 2022-06-15-🛠️-poetry-generator %}) page to this page to make room for other types of poetry generators.