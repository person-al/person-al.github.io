#!/bin/bash

obyde -c _config.yml
git add .
date_str = date +%Y-%m-%d %T
git commit -m "Automatically converting and adding posts: ${date_str}"
git push origin main