---
category: "\U0001F330"
date: 2022-06-08
layout: post
tags:
- PortOfDetection
title: "\U0001F330 a meeting on nft art"
---

The other day, I met with Commits Vortex, a fellow frequenter of the [Yak Collective](https://www.yakcollective.org/). I wanted feedback on [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}), the NFT project I've been tossing around in my head. Some notes on the meeting:

**On where the art can go:**
We discussed the form of Port of Detection for quite some time. The way burning is used to challenge the way we think of blockchain ownership was definitely an interesting one, but Commits Vortex noted that there were other mechanisms of the blockchain I could pull into the work:
- The idea of generative art that can change over time came up multiple times, with references to [DeafBeaf's generative NFT project](https://www.deafbeef.com/series/3), the French [OuLiPo](https://en.wikipedia.org/wiki/Oulipo) movement, and [Manferd Werder's Stück](https://www.flickr.com/photos/marcwathieu/4358065624). Questions like: what if the vowels in the story rotated with each transaction?
- Decay came up a few times as well, one idea that stuck with me was opacity: the idea of an artwork growing more visible or less visible with time.
- While in my initial ideation I had broken the story down into chapters, Commits Vortex reminded me that I could go even further. I had briefly toyed with a Mad-Libs like idea: one NFT controlling all the character names, one all the places, etc. But we discussed going even further: NFTs controlling the level of sentences, words, or even individual letters.
* They also noted that I could merge the content of the textual work with the mechanics of the NFT work. If my story has specific themes, can I bring those themes into the interaction model of the NFT?

**On where  I can go:**
My weakest skill, in my own estimation, is in the marketing of the art. How do I explain the concept in a way that excites people? How do I find people who are as excited by this weirdness as I am and will want to play around with whatever I build? Commits Vortex noticed that the main [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %}) page reads like a technical summary, less so an artistic one. Finding the balance between the two is something I'll have to work on.

**On a shifted direction:**
At first, the idea of adding generation into the system played fully at odds with the story I had planned for this piece. And it was hard to see how things like rotating vowels or changing opacity would play nicely with an encrypted block of text. Instead of a planned story, I needed a generated artwork. A generated poem, perhaps? When you burn the token, a line is added to the poem, the words for which are chosen based on how long the token was held, how many times it was transferred between parties, etc.

This direction has a few benefits, the primary of which being that this system _could_ exist entirely on-chain. Much like the [Loot contract](https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7#code), I could put the entire dictionary for the poem on chain, along with the exact algorithm by which the line for the poem is constructed. Opacity could also play a factor this way. Depending on the "opacity" of the line, the algorithm may skip words or return an empty line.

So that's what I'll be exploring next: poetry generation. We'll see how it goes.

## additional resources
- [DeafBeaf's generative NFT project](https://www.deafbeef.com/series/3)
- [OuLiPo](https://en.wikipedia.org/wiki/Oulipo) movement
- [Corruption(*s)](https://corruptions-messaging.vercel.app/) ([etherscan](https://etherscan.io/token/0x5BDf397bB2912859Dbd8011F320a222f79A28d2E#readContract))
- [Loot contract](https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7#code)
- [midwit](https://midwit.vercel.app/N4IgLgngDgpiBcIAmB7AxiANCNKB2YMBCA2qJLAiABYwCGSAlngOZYh1hgBOAzgqAA2MAG4xBCAIwBfbLgJEwpctDiJCADyXZNSxAFlGSAO6Ml0gLqyVlRFDrc6LR1Grt5hYvDLhVVXewBiAC2RqZgAASMvBF0eBEwGrDcjMGKEQBmKNwRuMEARszMLBF4Do5gjGIR4dQRvMEOkR6OaGC8AHQRAOoplayxMQCuvEN0ghFDBIwTEChDERQwESDWvrbgidogjdwA1vzeNmo4KEhwljpbVAD0LXRtq5jH-tdXWlQRANwAlBEAKtwIBEoCgoFBilF4nRSkMCjAcvlxChjF0ni91G8dg4Dsp1idBMw9uxODxDqBqNwYBkqNQuFBePAbjd+hAhtxBB08jcAExQAAcSAAnNwAMw0nQOFgwPQgAD6+UEcWJ0kumw+iAAYtk9hEAGQRACiTHMz3xrw+71li2o0RBTmWYBQiyBUUic3ZvHEGQ6qysZqWVHubU1UzajHwJK4fAEHCQSCpvEOIAADBoMhkhWhJPlJABWXMANh5hdFaELkiQKckAHYYDAhRlC3m0HmUzAACx0GDVySipA19zUOjMACSSCkchGTuCAEFCgg8ENBIJsIl7HhzhP4Blxl7sBkw5V8ABpGAQfwoPZEACqACVRwBhDswYySFhQFhIFh7FgAKT2WdVjWQM7AcJwXDcOR8E8PQfFA9VtiCEAAAkEWWBxll4FA0giUITDMCIWCGIwYBiJ1cloNBdXmMBEEsEC-EQfJl2EMAABlom2DxFDxBDCV4MBR0IYJ3Bg3ijnNMDHGcOhXDEhQvHgpjEPYXZcUk-iiSjMlY0palaXpRlmVZdlOW5Pl+TAOgAC8GUCKUZSoBUlTwFU1WQwwCFiHpsgnBj-QxEABKEkSFNgviVPsGTIPCiTlI2AJsHUw4EoJbTsFJGN4ApKkaUQOkwAZJkWWYNkOS5HDeRrDRuCmYweQc7hpVlFzlWAiwrSodiUBQSIAAoshyWckDEAh2TIn4-QYgMVJC4SYFE6DFLgoLooguSoNOFbIsSrEUt29K3J07LcoMgqjJK0yKosqAhQ0flRTzC9JWapzEDa47VU61TEAAZVtcQkH4AKZrW8DZPk5aIs0lSkt+kBujMOp8PCTAIg9XI4giKkGFiTcaj6ZYkE4GEMm4HDchg1p2nRuIkBxohzhyfAAFo0GHZg8JgJg6C6Q0kkEbIYHRobdQNHmzHR3hhypABCabZo2dbIa2nilKC+HkMAPg3ADy99EpNU5KcVSoLCWOzLo3JGg8sMorjNKvByvMqqIHyUUACtCwgDQXvARzWsVdrvq6gxGG4CmcjtW0UlYaarCAA)
	- I could use this to generate the minting UI, as basic a UI as that would be. It would decrease the need for me to host a separate javascript situation myself.
- [Manferd Werder's Stück](https://www.flickr.com/photos/marcwathieu/4358065624) - a generative music piece from 1997

**Info**:
- **Related to:**
	- [🛠️ Port of Detection]({% post_url 2022-06-03-🛠️-port-of-detection %})
	- [🌳 NFTs change how we create]({% post_url 2021-09-06-🌳-nfts-change-how-we-create %})
	- [[🌰 on creating NFT art]]