---
category: "\U0001F331"
date: 2025-10-29
layout: post
tags: review
title: "\U0001F331 the royal hotel - a movie review"
---

Note: this review contains spoilers.

- **genre:** suspense/thriller
- Felt realistic. Most horror movies have a premise that could never happen in the real world. This one felt more grounded in reality.
- I wanted to like the main characters, but I couldn't really relate to them at all. Liv walked through the world like she was a 6'2" 300lb white man continually acting like Hannah was paranoid for feeling unsafe.  Meanwhile, they seem to be the only two women under the age of 35 in a mining town full of men bigger than them. There's no cellphone reception, and they're the bartenders. Literally red flag city from 5 minutes into the movie and Liv is out here like "He's just lonely, not a big deal that he showed up drunk outside our bedroom after the bar had clearly closed." I guess I haven't met anyone with such a piss-poor sense of self-preservation. So I struggled to see her as more than a character? Hannah was more relatable but you kinda just felt bad that she had no help, nowhere to go, and nothing to do.
- The pacing was... fine. This is one of those movies where nothing really happens until the end. The suspense stays steady the entire time, spikes briefly, and then concludes.
- You kinda spend the whole movie knowing what Hannah already knows: shit's sus, they should leave, but Liv has apparently never experienced physical danger in her life and refuses to leave. Hannah is too good of a friend to leave her behind. Meanwhile, Liv's not even a good enough friend to have Hannah's back when she threatens to quit.
- I think the thing that made this movie fall flat for me was Liv's character. I didn't understand what was going on in her head, she was the only reason we were all in this dangerous situation. In fact, it kinda felt like the only reason she existed in the movie was to keep Hannah stuck and to continually push her friend to stay. Couldn't even hold up the cake Hannah made for her. Hannah was ride or die and Liv was blind and unsympathetic. In theory there could be an interesting explanation for the dynamic but that didn't come through.
- I'm glad Liv and Hannah were okay in the end. I'm glad they were able to save Liv.
- Direction & acting was good. The world building was relatively interesting and nuanced. They left the thinking to you, like the scene with Tommy (the guy delivering groceries) had a lot of layers.
- The pacing, scenery, all well done.
- I think the movie overall is very well put together. Liv's character didn't land for me personally, so that element fell flat a bit. But overall a well-structured anxiety ride with a happy ending.

{% assign review_posts = site.posts | where_exp: "post", "post.tags contains 'review'" | where_exp: "post", "post.url != page.url" %}

{% if review_posts.size > 0 %}
**Info**:
<ul><li><b>Related to:</b>
  <ul>
    {% for post in review_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul></li></ul>
{% endif %}