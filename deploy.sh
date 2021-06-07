#!/bin/bash
rm -Rf public && hugo && rsync -zrcvh --delete-delay public/ hugocodexorg@ams01.usecue.nl:public_html/