---
category: "\U0001F331"
date: 2026-04-06
layout: post
tags: review
title: "\U0001F331 shadow of the leviathan - a book review"
---

- I listened to the audiobooks for the first two books, highly recommend!
- I enjoyed them both! I tried to write a short story once with an element of "what if instead of mineral-based technology, it was lifeform based -- everything was grown rather than built" in the world building. My plot premise wasn't fully fleshed out and I've never finished it. But it was nice to see someone else inspired by a similar question and execute it really well!
- Having the Sherlock character be too overwhelmed to go to the crime scene was a nice touch: it forces the viewpoint character to be the one the audience relates to. The original Sherlock Holmes stories does this with first-person narration from Watson, but _Shadow of Leviathan_ does it this way to enable third-person limited narration.
- There are clear _Pacific Rim_ influences, but it also feels like... _Murderbot Diaries_ influence? There's a technique social commentary via worldbuilding, rather than via plot. The worldbuilding influences the plot, of course, but there's something different about the way these two series leverage worldbuilding compared to, say, _Brave New World_ by Aldous Huxley, where the commentary _is_ the plot (because the commentary is the point).
	- Clearly, this is not to say one technique is better than the other. But rather to call out that they use different techniques.
	- I wonder if this technique is more common in modern sci-fi and fantasy because these genres are now fully established. They can win prestigious awards, no one would believe [the _War of the Worlds_ panic reporting](https://slate.com/culture/2013/10/orson-welles-war-of-the-worlds-panic-myth-the-infamous-radio-broadcast-did-not-cause-a-nationwide-hysteria.html) today.[^1]
		- Similar to how prologues for fantasy novels have fallen out of fashion: readers know what to expect now, they don't need to be handheld into the new world, they can dive right in.
- My only tiny nitpick with the audiobooks: Libby needs a way for you to view any related PDFs while listening. There's this section at the beginning that goes over the rank order for the military. It's not critical to remember, I read both books letting the context guide me on the titles and it was fine. But I would have liked to refer to the ranking order on a few occasions. I do know that audiobooks do sometimes come with PDFs with resources, maps, etc. I assume this one did too.
- I'm still deciding how I feel about audiobooks, it's easier to let the book wash over you and not be fully present no matter how good the book is. It's like watching a TV show while doing something else. You get distracted, you look back, and all of a sudden you've gone from a lost zebra to stealing money from the US Treasury. You weren't paying attention, it's not that the show was poorly written. But now you don't know how you got there, which makes it hard to care.
	- At the same time, there are books that are meant to wash over you. Books are much more dense than podcasts and more valuable ways to spice up a walk or commute or loading the dishwasher.

[^1]: Idk if Slate is correct or the newspapers are correct. Let me know if you dig into it enough to be certain of the truth!

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