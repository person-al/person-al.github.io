---
category: "\U0001F330"
date: 2026-05-04
layout: post
tags: review
title: "\U0001F330 yumi and the nightmare painter - a book review"
---

Note: This review contains spoilers
# What Worked
- Brandon Sanderson is known for his inventive world building and this makes it clear why. It's an imaginative, fascinating world.
- The thing that separated the characters was delectable. I'm reminded of the Japanese movie "Your Name", the concept is still rare enough to feel surprising and fresh.

# What Didn't
- I love a happy ending, so I understand why Sanderson went with a happy ending. But from a craft perspective, I think that made the story weaker. Every part of the resolution built towards a doomed couple. Since Yumi was already dead, it made sense that she had no way to keep existing after it so fell apart. The reversal of that was hard to follow and didn't feel right, even if you were happy she didn't die.
	- A better example of this is "Your Name Is", the Japanese animated film where there's a similar ending reversal, but it feels more earned.


{% assign posts = site.posts | where_exp: "item", "item.url != page.url"|where_exp:"item","item.tags contains 'review'" %}
{%if posts.length > 0 %}
**Info**:
<ul><li><b>Related to:</b>
<ul>
{% for post in posts limit:10 %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title | downcase }}</a></li>
{% endfor %}
</ul></li></ul>
{%endif%}