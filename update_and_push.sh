#!/bin/bash

obyde -c _config.yml
git add .
date_str = date +%Y-%m-%d %T
git commit -m "Adding posts and Obsidian conversion code: ${date_str}"
git push origin main