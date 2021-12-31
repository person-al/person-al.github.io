---
category: "\U0001F331"
date: 2021-06-09
last_modified_at: 2021-06-22
layout: post
status: published
tags: nft
---

There is a huge hole in NFTs right now: they require too much trust. NFT best practices necessitate storing a proof on the blockchain that allows the system to validate all metadata attached to the NFT.

The problem?
- all metadata in the ETH ecosystem is stored in a json file hosted elsewhere. The Ethereum blockchain itself only stores a link to the metadata.
- the metadata file then hosts links to the files that are "owned" by the NFT owner.

This creates a series of bad outcomes:
1. The site hosting the metadata file shuts down, you lose access to the file and never get it back.
2. The site hosting the metadata file shuts down, you lose access to the file. A previous owner or the creator of the NFT reaches out with a copy of the file, but you have no way to validate that it is the original file.
3. Someone hacks the site hosting the metadata files, replacing what is at that url with something else.

There's a very simple solution to this:
- store a validation hash of the file on the blockchain. It won't fully solve 1, but in the event of 2 & 3, you can at least validate that the contents of the file are identical to what the NFT creator originally intended.