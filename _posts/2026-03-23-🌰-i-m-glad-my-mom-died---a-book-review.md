---
category: "\U0001F330"
date: 2026-03-23
layout: post
tags: review
title: "\U0001F330 I'm glad my mom died - a book review"
---

- harrowing
- interesting how she stayed in present tense and present-mind the whole time. It kept the book fresh, in a way, because her mother's actions don't change, but Jeannette's emotions and experiences do over that time. If she'd had an omniscient reflectiveness from the beginning, it would take away from the latter chapters of the book and flatten it out, imo. Instead she leaves just enough foreshadowing and detail for you to see what older!Jeanette discovers
- child acting should probably be banned. Have we heard of a single child actor that's glad they did it? Is this why so many kids shows are animated: so an adult can do the voice and you avoid child labor laws?
- it was interesting how she limited industry talk. This book was about her relationship with her mom and her internal journey, her personal relationships. The only significant abuse mentioned was her mom's, with creepy behavior from The Creator and others, but not as many details on that. This was a story about a girl and her mom.

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