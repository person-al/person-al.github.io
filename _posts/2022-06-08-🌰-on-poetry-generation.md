---
category: "\U0001F330"
date: 2022-06-08
layout: post
tags:
- PortOfDetection
- poetry
- nlp
- ComputerGeneratedText
title: "\U0001F330 on poetry generation"
---

In my explorations for [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}), I'm looking into poetry generation. I don't need it to be _good_ poetry. But something passable and enjoyable enough. Obviously, this is a difficult task if I'm not going to use AI. But I hoped that given its abstract nature, "adequate" poetry might be easier to create heuristically than an "adequate" sentence. This may still be true, but "adequate" poetry is still a struggle so far.

Here's my approach so far:
- [get a list of frequent words with parts of speech](https://www.wordfrequency.info/samples/lemmas_60k.txt) 
- come up with a mapping of parts of speech to what the next part of speech can be (e.g. a noun can be followed by a verb or an adverb)
- create some code that randomly strings together words into lines and lines into a poem. (e.g. pick a random noun, pick a random part of speech to follow the noun, let's say we picked verb, okay now pick a random verb, etc)

Here are the outcomes so far. The lists of letters are the parts of speech associated with the lines, so I can get a better sense of which links to change:
```python
>>> print(generate_poetry(5,10))
['m']
['i']
['a', 'v', 'c', 'm']
['a']
['i', 'n', 'n', 'e']
four
inside
its suffer whether four
its
inside difference cloth there
>>> print(generate_poetry(5,10))
['r', 'v', 'n', 'j', 'j', 'j', 'j']
['a', 'r', 'j', 'n', 'n', 'j', 'n', 'r', 'm', 'a']
['d', 'n']
['c', 'r', 'e', 'v', 'n', 'c', 'n']
['m', 'n', 'a']
slightly cry need smart glad comfortable just
every nearly best smell van open member upstairs second no
both nail
whether absolutely there hire situation nor fire
second mark its
>>> print(generate_poetry(5,10))
['v', 'r', 'v', 'n', 'i', 'a', 'v', 'r', 'n', 'c']
['e', 'i']
['j', 'n', 'j', 'j', 'n', 'a', 'r', 'v', 'i', 'n']
['d', 'n', 'c', 'v']
['i', 'a', 'r', 'a', 'n', 'e', 'v', 'c', 'v']
shout bit die stranger of every die in police nor
there beneath
female grave pregnant smart fall its through could inside police
both difference far escape
because its in every garage there pop nor save
```

I don't find these adequate enough, which raises a few questions:
1. Can I further restrict the rules to create more pleasing patterns? (either by restricting the word choices or changing the parts-of-speech mapping)
2. Can I change the atomicity of generation, perhaps picking random lines or clauses instead of individual words?
3. Am I restricting myself too much by focusing on poetry that is pleasing? Are a random series of words good enough?

I don't have answers yet. I don't like the idea of picking random lines, I think pre-chosen lines won't feel random enough. I want to play around with the logic more before I give up entirely on the resulting poem having a recognizable aesthetic to it. I wonder how visual and audio artists deal with this problem, I'll have to do some research.

If you have thoughts, reach out.

**Info**:
- **Related to:**
	- [[🌰 poetry generation resources]]