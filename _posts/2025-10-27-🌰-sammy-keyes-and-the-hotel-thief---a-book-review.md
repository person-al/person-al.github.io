---
category: "\U0001F330"
date: 2025-10-27
layout: post
tags: review
title: "\U0001F330 Sammy Keyes - a book review"
---

Sammy Keyes is a middle grade mystery series centering a young girl living illegally with her grandmother. This review does not contain spoilers.
# What Works
- the choice of characters feels realistic yet unconventional and interesting. There's nothing cliche or trite about a girl in junior high who lives with her grandma illegally
- and unlike many kid's adventure books, her relationship with the adult world is a core element in the first book. Hiding her situation, being underestimated, being disrespected, etc. It's not just the real life of being a kid at school, it tackles the real life of being a kid in a world run by grown ups
- people have emotions, they hurt each other, they are angry, they act out in anger, they apologize and move on where appropriate
- the mystery is solvable by you. The clues are there for you.
- it's just fun, nostalgic fluff
- "Do you think they have secret lives as nice people?"

# What Didn't
- It's unfair to express dislikes about a book that's clearly not _for_ you
- so none of these are really criticisms. They're more "what to expect as an adult reading this book"
- You know you're a grown up now when some of the disrespect Sammy gets from adults not only boils your blood but also makes you think "Would an adult in authority be so unfair?"
	- The answer is obviously yes: adults ignore kids' point of view all the time ("I just need to keep the peace and get through the day I don't really care about justice"). And even if it's not always as blatant as shown in the book, from a kid's perspective it probably is that blatant.
- But yeah, there are some hidden motivations that are made more explicit than they would have been in a book aimed a little older.
	- Marissa's relationship with her parents comes to mind as an example. There is some "show and then tell" used where I think in a book aimed older it may have just been "show" in the first book.


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