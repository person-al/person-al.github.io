---
category: "\U0001F330"
date: 2022-06-08
last_modified_at: 2022-06-28
layout: post
modified:
- 2022-06-08
- 2022-06-15
- 2022-06-28
tags:
- PortOfDetection
- poetry
- nlp
- ComputerGeneratedText
title: "\U0001F330 on poetry generation"
---

In my explorations for [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}), I'm looking into poetry generation. I don't need it to be _good_ poetry. But something passable and enjoyable enough. Obviously, this is a difficult task if I'm not going to use AI. But I hoped that given its abstract nature, "adequate" poetry might be easier to create heuristically than an "adequate" sentence. This may still be true, but "adequate" poetry is still a struggle so far.

## 1. Grammar-based poetry generation

My first step was to mix basic grammar rules with randomness. Here's how it worked (you can play around with it yourself [here]({% post_url 2022-06-15-🌰-random-poetry-generator %})):
- [get a list of frequent words with parts of speech](https://www.wordfrequency.info/samples/lemmas_60k.txt) 
- come up with a mapping of parts of speech to what the next part of speech can be (e.g. a noun can be followed by a verb or an adverb)
- create some code that randomly strings together words into lines and lines into a poem. (e.g. pick a random noun, pick a random part of speech to follow the noun, let's say we picked verb, okay now pick a random verb, etc)

Here's what the results looked like. The lists of letters are the parts of speech associated with the lines, so I can get a better sense of which links to change:
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

### Feedback from others
I've sent the [🌰 random poetry generator]({% post_url 2022-06-15-🌰-random-poetry-generator %}) to a few groups, this is a space to collect questions, feedback, and ideas as they come:
- could you have themes for people to select from?
    - This suggests a meta level of control. Instead of generating word-by-word, which is what's done now, I could have clusters of words organized by theme.
- could rhyming be incorporated?
    - I think this would be hard from a gas perspective. The logic to track rhyming schemes might be onerous on the blockchain.
-  could you let people upload their own word lists to set the theme?
- Personally, I've noticed that limiting the vocabulary to generate grammatically correct clauses is hard
    - should I generate from the end instead of the front?
    - should I limit all words to make grammatical correctness more likely? (E.g. all nouns are plural so the verbs are in plural form, or change all verbs to past tense, etc)

## 2. Concrete Poetry
Concrete is a style of poetry in which form matters more than the content. These are the poems of apples shaped like apples or, in terms of what caught my eye: _[Obligations 2](https://www.poetryfoundation.org/poems/149976/obligations-2)_. You can see how I played with that in [🌰 concrete poetry pathfinder]({% post_url 2022-06-30-🌰-concrete-poetry-pathfinder %})


## Info:
- **Related to:**
	- [[🌰 poetry generation resources]]