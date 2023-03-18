---
category: "\U0001F330"
date: 2022-06-30
layout: post
tags:
- Pathfinder
title: "\U0001F330 concrete poetry pathfinder"
---

Reading Layli Long Soldier's [_Obligations 2_](https://www.poetryfoundation.org/poems/149976/obligations-2) is like reading your horoscope. Shaped like a diamond, the piece invites you to read it any number of ways: forwards, backwards, or a meandering path down the middle. I was struck by how the diamond structure allows a huge variety of outcomes (up to 128!), while still producing something meaningful. If you've played with the [🌰 random poetry generator]({% post_url 2022-06-15-🌰-random-poetry-generator %}), you know how hard that is.

This artwork allows you start with a random poem of my choosing, but change any words, or the entire structure of the poem, if you'd like! Hitting the "Generate" button walks you down a random path, highlighting the words as it goes. Replace all the words with your own to come up with your own poetry. 

<script type="text/javascript" src="/assets/js/concrete_poetry_generator.js"></script>

<style>
       .inline-inputs {
           display: inline;
       }
</style>


<form action="#" onsubmit="onSubmit(); return false;">
<div id="diamond" style="width:1400px;">
    <div style="margin-left: 500px;"><input class="inline-inputs" type="text" id="1-1" value="When she" /></div>
    <br />
    <div style="margin-left: 370px;">
        <input class="inline-inputs" type="text" id="2-1" value="opened" /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="2-2" value="closed" />
    </div>
    <br />
    <div style="margin-left: 300px;">
        <input class="inline-inputs" type="text" id="3-1" value="the letter" /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="3-2" value="the blinds" /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="3-3" value="her eyes" />
    </div>
    <br />
    <div style="margin-left: 200px;">
        <input class="inline-inputs" type="text" id="4-1" value="she'd been avoiding," /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="4-2" value="that morning," /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="4-3" value="that night," />
        <span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="4-4" value="against the sun," />
    </div>
    <br />
    <div>
        <input class="inline-inputs" type="text" id="5-1" value="she gasped --" /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="5-2" value="she wept --" /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="5-3" value="she laughed --" /> <span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="5-4" value="she smiled --" /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="5-5" value="she raised her arms --" />
    </div>
    <br />
    <div style="margin-left: 200px;">
        <input class="inline-inputs" type="text" id="6-1" value="thinking" /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="6-2" value="believing" /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="6-3" value="dreaming" />
        <span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="6-4" value="enjoying the sounds" />
    </div>
    <br />
    <div style="margin-left: 300px;">
        <input class="inline-inputs" type="text" id="7-1" value="it was over." /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="7-2" value="it was just the beginning." /><span style="width: 50px; display: inline-block;"></span>
        <input class="inline-inputs" type="text" id="7-3" value="of youthful laughter." />
    </div>
    <br />
    <div style="margin-left: 370px;"><input class="inline-inputs" type="text" id="8-1" value="She hoped" /><span style="width: 50px; display: inline-block;"></span> <input class="inline-inputs" type="text" id="8-2" value="She knew" /></div>
    <br />
    <div style="margin-left: 500px;"><input class="inline-inputs" type="text" id="9-1" value="she was enough." /></div>
    </div>
    <br />
    <input class="inline-inputs" type="checkbox" id="wrap" /> Allow wrapping
    <input class="inline-inputs" type="submit" value="Generate" />
</form>

<h3>Poem Pathfinder:</h3>
<p id="poem">Fill out the form above and hit Generate to see your poem</p>
<br />
<div id="send_me_box" style="display: none;">
    Like what you made? <a id="send_me_link">Send Me Your Poem</a> or
    <a href="https://twitter.com/intent/tweet?via={{site.twitter_username}}&url={{ site.url | append: page.url | append: '?ref=twitter_share' | url_encode}}">tweet at me</a>
</div>
<div>
    <h3 style="display: inline;">All Potential Paths:</h3>
    <button style="display: inline;" type="button" onclick="return showOrHideAllPaths()">(Show/Hide)</button>
</div>
<br />
<div id="all_poems" style="display: none;">Fill out the form above and hit Generate to see your poems</div>
<br/>

**Info**:
- **Inspired by:**  [_Obligations 2_](https://www.poetryfoundation.org/poems/149976/obligations-2) 
- **Related to:**
	- [🌰 random poetry generator]({% post_url 2022-06-15-🌰-random-poetry-generator %})
	- [🌰 on poetry generation]({% post_url 2022-06-08-🌰-on-poetry-generation %})
	- [🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %})