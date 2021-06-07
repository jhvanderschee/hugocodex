#!/bin/bash
#
# send incremental changes to production server using rsync with flags:
#
# -z Zip compress the transfer to reduce bandwidth
# -r Recursive processing includes subdirectories
# -c Checksum based comparison as regeneration touches file dates
# -v Verbose output of all transfered files
# -h Human readable file sizes
#
rm -Rf public && hugo && rsync -zrcvh --delete-delay public/ hugocodexorg@ams01.usecue.nl:public_html/