---
category: "\U0001F330"
date: 2025-10-05
layout: post
tags: book-review
title: "\U0001F330 wedding people - a book review"
---

Warning: this book involves attempted suicide and therefore this review mentions that in passing

Note that the following review contains spoilers
# What Worked
_Wedding People_ made me think 
- It's about how keeping the peace is such a core aspect of being a social species
- how we find it so much easier to keep going in the same path, even when it's not working
- and how a breaking point, how realizing you have no more reason to care, can change everything about how you interact with others
- but the minute you care, it's so easy to slip back into the white lies & silence for peace keeping's sake

The way Phoebe's role in the wedding fluctuates is so interesting. She has nothing left to care about when she enters the hotel. So she allows herself to be frank with everyone around her, including the bride. The "wedding people", however, are trapped in their own societal expectations, the way Phoebe was before she entered the hotel. They must keep up the niceties with the bride, their relatives, friends, and the other guests who matter to the bride and groom. Only Phoebe can be honest, and that's refreshing to everyone around her. Everyone is drawn to her and relieved by her taking on this role. But the closer she gets to the bride and groom, the more she wants to help the bride. Help ensure the wedding goes off without a hitch. Thus, Phoebe becomes one of the "wedding people", torn between her newfound freedom and the societal expectation that all wedding people help keep the peace. In the end, it's the freedom and honesty that mostly win, when she tells Lila to get over herself and Lila shows the courage to call off the wedding.

Other thoughts:
- I loved the characters.
- I loved the way the author treated the pandemic.
	- It was set in our world, it was so _real_ about ways the pandemic impacted so many of us, but it wasn't a Pandemic Book.
	- I think contemporary writers could use this as a model for how to create a contemporary setting while accounting for the pandemic.
- I appreciated the way the author brings you and Phoebe to the same place wrt her husband's affair.
	- In most stories, the character forgives their ex before the reader does. I still find myself wanting to see the ex apologize with more groveling than the character seems to.
	- But with this, I felt on the same page as Phoebe by the end. Not only does Matt apologize, but the dramatic improvement in Phoebe's mental health by the end of the book... it's not something that seems possible pre-affair.
- There is something so significant about Pauline's complete indifference to Phoebe at the end. But I can't quite to grasp what it is.
# What Didn't
- The scene with Lila's mother in the beginning felt a little too monologue-y. Monologuing is Lila's thing and it felt a little boring to have other characters monologue.
- When I started the Phoebe flashback scene, it felt a little long.
	- I already knew where Phoebe was ready to commit suicide and wanted to read about how she got out, not thousands of words about how she got there. In the moment it felt like the story was on pause.
		- I think I also just don't like watching a tragedy where I know the ending.
	- But by the end, and as the book went on, it made sense that I needed that backstory and I appreciated it. The nuances of how bad of a time Phoebe was having I think were important to fleshing out both how she got here and the theme of keeping the peace.

{% assign posts = site.posts | where_exp: "item", "item.url != page.url"|where_exp:"item","item.tags contains 'book-review'" %}
{%if posts.length > 0 %}
<b>Info:</b>
<ul><li><b>Related to:</b>
<ul>
{% for post in posts limit:10 %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title | downcase }}</a></li>
{% endfor %}
</ul></li></ul>
{%endif%}