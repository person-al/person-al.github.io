---
category: "\U0001F330"
date: 2025-10-25
format: ebook
layout: post
pagelength: 302
readtime: 3 hours 40 minutes
status: read
tags: review
title: "\U0001F330 excavations - a book review"
---

Note: this review contains spoilers
# What I Loved
- Skillfully crafted three-dimensional characters which enables the book to be about more than the plot.
	- complicated nature of motherhood, the trauma created by your parents, political activism, corruption, the brutality of greed
- a grittiness that feels like the real world
	- how the powerful have no mercy, how you can try and not succeed, how you can't have it all, how hard it is to be a mother, Jae's death, her mother's death, how they lose before they win, how her children still suffer the trauma cycle and she knows she's let them down in some way
- Her choice to try and break the trauma cycle, even if it was too late to mitigate damage was just...I loved it. I found it so moving.

# What I Didn't 
- Author sometimes does more telling than showing
- other people have talked about the pace, idk. The ending did fly by way faster than the rest of the book. But I didn't mind much?

# Other thoughts
- I think I see why Jae had to die: for the poetic ending of a father's greed killing his own son. Though I wish the Chairman to experience that pain more visibly on the page. Or maybe the point was that he didn't care? I think I need to reread that part.
- The rest of the story was realistic enough that I honestly didn't see the twist coming. I considered it, in fantasy or sci-fi or a different genre of fiction I think I would have clocked it right away. But in this world, everything seemed grittier and realer. And they said he was dead, not missing. And there was the missing daughter. So it didn't really occur to me until it was revealed that Gaeyun was still alive. No wonder he was a stay at home dad, too, he can't have any papers to reveal his identity.
- I wonder why they didn't kill her and/or the boys sooner.


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