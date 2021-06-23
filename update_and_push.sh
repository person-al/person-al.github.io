#!/bin/bash

./obsidian_to_jekyll
git add .
date_str = date +%Y-%m-%d %T
git commit -m "Automatically converting and adding posts: ${date_str}"
git push origin main