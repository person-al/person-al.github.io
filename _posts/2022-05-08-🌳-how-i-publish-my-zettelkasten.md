---
category: "\U0001F333"
date: 2022-05-08
layout: post
tags:
- githubpages
- zettelkasten
- obsidianmd
- fediverse
- indieweb
---

> **[Assumed Audience](https://maggieappleton.com/assumed-audience):** In writing this piece, I assume you have enough interest in publishing your own notes online that you're looking for a detailed step-by-step of how I do things. I also assume that your interest is primarily on the "how" and less on the "why".

If you visit [person-al.github.io](https://person-al.github.io), you'll see a slice of my personal [Zettelkasten (or the slip-box)](https://en.wikipedia.org/wiki/Zettelkasten). It's a note-taking method I use that focuses primarily on small, atomic notes that you build on and connect slowly over time into larger and more complex projects. By publishing even the smaller notes online, my goal is to lower the barrier to conversation and learning for myself.

Because I use [Obsidian](https://obsidian.md/) for my notes, Obsidian Publish is a built-in option I could use. However, I wanted to experiment with my own system first. The instructions that follow work for anyone who has local markdown notes. Here's the rough outline of how my system works:
1. [Set-up](#set-up-steps)
	1. [Set up Github Pages](#1-set-up-github-pages)
	2. [Create a blog folder in your vault](#2-set-up-your-folder)
	3. [Set up obdye](#3-set-up-obyde)
2. [Publish](#publishing-steps)
	1. [Create a note you want published](#1-create-your-note)
	2. [Run obyde script to convert vault files into blog posts](#2-run-obyde)
	3. [Push changes to GitHub](#3-push-to-github)

Now, let's walk through it:

## set-up steps
Set up is pretty easy and took 3 steps:
1. Set up a Github Pages account with a basic website and theme.
2. Create a folder in your vault that contains everything I want published
3. Set up obdye

### 1. set up Github Pages
Github Pages is just one option for hosting your blog. You can use something completely different and follow all the other steps in this post if you'd prefer. The steps further down assume:
1. that your blog posts exist in markdown in a folder on your computer, and
2. that you use jekyll or hugo to generate your site. 
If you're not using jekyll or hugo, all of these steps except obyde will work without modification. With minor modifications, obyde should work as well.

I won't go into details on how I set up my Github Page, the most up-to-date instructions will be [here](https://pages.github.com/). For my blog, I went with the [no-style-please theme](https://github.com/riggraz/no-style-please), as I wanted a theme as simple and Craigslist-like as possible. You'll notice that I [copied the style's css into the project](https://github.com/person-al/person-al.github.io/tree/main/_sass) so I could customize it. The biggest modification I made was to remove their dark-mode support from the css file and import [water.css](https://watercss.kognise.dev/) for dark-mode instead. No-style-please implements dark-mode itself by inverting all the colors except image colors. This worked well 99% of the time, except...emoji colors would get inverted. While I could have tried to fix it, it didn't feel worth it. My goal was simplicity, not dependency elimination. Water provides a more aesthetically pleasing dark-mode as it is, which felt worthwhile.

### 2. set up your folder
Unless you want 100% of your vault published at all times, you'll want to set up a specific folder in your vault that contains blog posts. Name the folder however you'd like and I recommend adding two subfolders: one for drafts and one for assets. This is optional, but I've found it useful to have everything meant for publishing in one place.

### 3. set up obyde
[Obyde](https://github.com/khalednassar/obyde) is the secret sauce holding my blog together and I highly recommend it if you're using markdown and jekyll/hugo. [khalednassar](https://github.com/khalednassar), the developer, responds quickly and amenably to questions, pull requests, and bug reports. They deserve major kudos for this tool.

Obyde takes a markdown file with frontmatter in one folder and converts it to a jekyll blog post file in another folder. The instructions for setup are [here](https://github.com/khalednassar/obyde#obyde). Note that under the [usage](https://github.com/khalednassar/obyde#usage) section where it describes the config file, you'll want to list the assets sub-folder in your vault and list your drafts folder under `excluded_subdirectories`.

What I've done is keep the obyde config file in my GithubPages repo, but add it to my `.gitignore`. The benefit is that all of the code related to my blog is in one place (the GithubPages repo), but the relative path to my vault and specific folder names in my vault are not published on the internet.

Now you're ready to publish!

## publishing steps
1. Create a note with all the metadata needed for Jekyll and store in my blog folder
2. Run obyde script to convert vault files into blog posts
3. Push changes to blog to GitHub

### 1. create your note
Create a note in the blog subfolder of your vault. It can really look like anything at all, the only requirement is that it have the [date frontmatter](https://github.com/khalednassar/obyde#caveat) so that obyde can convert it to a jekyll-style post file. This is the only change you'd need to make in order to use obyde without using jekyll or hugo. You'd either need to modify how obyde sets the post title to avoid needing the date frontmatter or, more reasonably, just add the date frontmatter regardless of whether your blog system needs it or not. Once you've made a few blog posts this way and have a better sense of what matters to you, consider [using templates](#templates-are-your-friend).

### 2. run obyde
Running obyde the standard way is a one-line command. However, I've created [a script to run obyde against my vault](https://github.com/person-al/person-al.github.io/blob/main/obsidian_to_jekyll.sh). So once I've finished making my note and putting it in my blog older, I just need to run the script. Part of the Zettelkasten approach means that my posts get updated and modified _constantly_, so just running obyde's default script isn't enough. You'll notice in the script that I delete all my posts and _then_ run obyde so that it catches all the changes in my vault. Because my blog is also a github repo, I can use regular git tools like `git status` or `git add -p` to see what's changed in already-published posts and make sure those changes are what I expected.

Once you've run the obyde script, you should see a bunch of posts in your blog's posts folder. Take a look and make sure everything is as you expect it to be.

### 3. push to Github
The beauty of Github Page is that updating anything about your blog is a push away. Commit and push your changes and your blog will rebuild within minutes.

Congrats! You've just published your Obsidian vault. Now go forth and create away! After you've made a few posts, feel free to come back and check out the "extra goodies" below where I discuss how handle intermediate use-cases like templates, hiding private notes, and connecting with the decentralized web.

Have fun posting!

<hr/>

## extra goodies
Once you've made a few posts, you'll probably need one or more of the following goodies:
- [templates](#templates-are-your-friend)
- [hiding parts of notes](#hiding-parts-of-notes)
- [joining the IndieWeb](#joining-the-indieweb)

### templates are your friend
While the date is the only required field in your post's frontmatter, you likely have others that matter to you. The layout, the category, tags, etc. From that perspective, templates are your friend. Whether it's Obsidian's built-in template tool or the Templater plugin or your own third-party template system, I recommend setting up a template so consistent blog post formatting is only a hot-key away. My template looks something like this:
```
---
layout: post
category: 🗨️|❔|🌰|🌱|🌳|🌲
title: "<% tp.file.title %>"
date: <% tp.file.creation_date("YYYY-MM-DD") %>
---
```
You'll notice that it sets required jekyll metadata like the layout and the date, as well as optional metadata that matters to me, like a list of categories for me to choose from.

The reason I add the title to the metadata is because of a difference in how jekyll titles notes vs. your computer. In Zettelkasten, your note title is often the thesis of the note. You'll see this in my blog with lengthy post titles like [🌰 recognition matters - human beings need to feel understood]({% post_url 2021-06-19-🌰-recognition-matters---human-beings-need-to-feel-understood %}). It's almost what you'd expect from a blog title but significantly more specific and more likely to use punctuation. Jekyll, however, doesn't support punctuation in file titles. Which means if my file name is [🌰 I'm struggling with a piece about business writers]({% post_url 2021-08-02-🌰-i-m-struggling-with-a-piece-about-business-writers %}).md, jekyll will rename that to `i-m-struggling-with...`, which will then get converted to the title "I m struggling with...", with a weird space where the apostrophe should be. I get around this by adding the `title` metadata to the frontmatter automatically. That way jekyll never accidentally skips punctuation. The downside is that every time I change the title of a published blog post, I have to update the `title` frontmatter as well. But it's worth it for me.

Template or no, just make sure you have the `date` frontmatter as obyde needs it to convert your file to a jekyll-compatible blog post.

### hiding parts of notes
Sometimes, you want to publish a note without publishing _all_ of a note. Maybe you reference a person or a place that you'd prefer not to publicize, or maybe you just have a way of formatting things in your vault that will confuse public readers. Take, for example, a post like [🗨️ A dog always bit deepest on the veterinary hand.]({% post_url 2021-06-27-🗨️-a-dog-always-bit-deepest-on-the-veterinary-hand- %}) In my case, it's just a simple quote, but in someone else's vault it might be accompanied by an MLA citation or a longer journal entry. This is where obyde's [find-and-replace feature](https://github.com/khalednassar/obyde#options) shines.[^1]

[^1]: Find-and-replace came about from me needing to optionally hide or reformat parts of my notes as described above. I made it work, put it in a pull request, and khalednassar kindly reviewed it and merged it in. If you're not a developer, this is kind of like if khalednassar had written a 10-chapter novel in a public place with a note that said "please add to this". And then I came along with a new chapter and said "Yo, check this out, it fits right between chapters 4 and 5." And then khalednassar had to proof-read my addition _and_ make sure the new version of the novel was still cohesive and worth reading. On the one hand, the whole beauty of public Github repos is that someone _can_ come add new functionality to your work. But on the other hand, managing code suggestions from other people is hard and much kudos to khalednassar for being open to it.

Find-and-replace works exactly how it says on the tin. I use it liberally. My actual post template looks something like this:
```
---
layout: post
category: 🗨️|❔|🌰|🌱|🌳|🌲
title: "<% tp.file.title %>"
date: <% tp.file.creation_date("YYYY-MM-DD") %>
find: ["find\\:\\n(- .*\\n)+","replace\\:\\n(- .*\\n)+","LEAVE_OUT\\:.*($|\\n)","tags-for-github"]
replace: ["","","","tags"]
tags-for-github:
---
```

A few things to notice:
- I use the list format instead of the "every line" format. This is marginally worse than the every line format in that it's much harder to count and match the `find` line elements with the `replace` line elements. But it's marginally better in that it compresses that long list above to 4 lines instead of 10 lines.
- I remove the find and replace lines themselves from the published piece. Because what's the point in changing things if I'm going to publish exactly what changed lol. You'll also notice here how [regexes](https://en.wikipedia.org/wiki/Regular_expression) can be used. If you don't know what regexes are, suffice it to say that `find\\:\\n(- .*\\n)+` is telling obyde "I want you to find a line that starts with `find:` and is followed by a series of bullet points after it. And then remove all of that."[^2]
- An example of removing things: any line that begins with `LEAVE_OUT:` will not be put in the final blog post by obyde. That allows me to say, mention my mother in a relevant note while preventing such a mention from making it to the world wide web.
- An example of reformatting: I don't use Obsidian's tags for categorizing. But I do want to use tags in jekyll. So instead of putting `tags` in my frontmatter, which Obsidian would pick up on and use, I instead have `tags-for-github`, which obyde smart-converts to `tags` when making the final blog post.

[^2]: This regex isn't perfect. If one of the items in the find-replace list spans more than one line, this regex can't catch that. I haven't figured out what to do about that yet...

It takes some understanding of regexes to properly use the find-replace feature, but I highly recommend using it if you want to keep one vault and publish only a segment of it. The alternative, of course, is to have a separate vault that gets published. In that case, find-replace is unnecessary.

### joining the IndieWeb
By posting a blog, you're already part of [IndieWeb](https://indieweb.org/)! IndieWeb is a decentralized consortium of personally-owned blogs. It's a community dedicated to helping you own and manage your content.

Corporate silos like Facebook and Twitter benefit from their proprietary formatting and following systems. Facebook knows exactly how to notify you when someone likes a post you follow, etc. With the independent web, there are some standards folks use to bring some of those benefits to a decentralized publishing ecosystem. That's where the [IndieWeb](https://indieweb.org/) shines. I recommend going through the [list of tools](https://indiewebify.me/) to see which make sense for you. I personally have IndieAuth and microformatting set up. (On that list, that is "Set up Web Sign In" and "Mark up your content with microformats2"). I would love to get webmentions set up eventually, but I'm just not sure how to get that working with GithubPage and if it's valuable to me right now. That said, who knows!