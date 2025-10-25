---
category: "\U0001F330"
date: 2025-10-13
layout: post
tags: review
title: "\U0001F330 poor things - a movie review"
---

Note that the following review contains spoilers.

- Yorgos Lanthimos always brings something new visually and audially to his movies.
- But he still maintains his voice: dark, absurd, surreal, uncomfortable, humorous.
- His movies often make me hear silence different for the next half hour -- this one too.
- The dance scene reminded me of The Favorite.
- The visuals reminded me a bit of Wes Anderson.
- There's an interesting question of perceived consent. Bella's age is unknowable throughout the movie. There is a transition point where she _is_ making informed choices and in control of her life. But the movie let's you decide when that transition point is, if you believe it happened at all.
- Despite how uncomfortable the circumstances are and how many men in her life seek to control her, the movie is about Bella claiming control over and over again and never failing. Bella's perspective and desires are the center of the film.
	- In another movie, many of her circumstances would have ended in sexual violence, domestic violence, and/or death but _don't_. Bella is able to explore and grow as a person in relative safety compared to how often I expected the movie to take a turn. And frankly, if it had gone that way, I would have enjoyed the movie a lot less *and* I think it would have been less interesting.
		- "The world is too dangerous for a young woman to explore safely" is not an interesting concept to explore
	- I appreciated the relative safety she got. _The Shape of Water_ felt a little more "Well, there's gotta be sexism and racism, it's a movie set in the 50s 🤷‍♂. What a shame 🤷‍♂. Wish we could have avoided it 🤷‍♂". Whereas this felt more "Yes, we've set it in the Victorian era, but this is a story of a woman discovering herself."
- I loved the angle of "Woman unburdened by societal context examines philosophy and ethics from first principles."
- I loved the way Bella expressed herself.
	- The "scientists talking to scientists" bit really felt right. There were moments where I was like "Ah, this was written by an engineer" 😂.
		- When she tells her "father" how she wants to hit him and he says "I understand."
	- Bella does not hesitate to explain how she's feeling, the full complexity of it, but always in fewer words than you'd think possible. Even as her language grows in complexity, she remains concise and direct.
	- Like when her "father" reveals the truth of her double-birth[^1]:
		- BELLA: I am finding being alive fascinating so I will forgive you the act, but always hate the lies and trapping that followed.
		- BAXTER: Understood. Good to see you.
		- BELLA: You too. Anger, confusion and brain dissonance aside. I missed you.
	- Or when her lover learns that she's been sleeping with others: "So Bella so much to discover, and your sad face makes me discover angry feelings for you."
- Lots of complex emotions. But on the whole: a skillfully put together movie that I appreciated.

[^1]: [Movie script](https://deadline.com/wp-content/uploads/2024/01/Poor-Things-Read-The-Screenplay.pdf)

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