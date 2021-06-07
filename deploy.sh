#!/bin/bash
#
# send incremental changes to production server using rsync with flags:
#
# -z Zip compress the transfer to reduce bandwidth
# -r Recursive processing includes subdirectories
# -c Checksum based comparison as regeneration changes mtime
# -v Verbose output of all transfered files
# -h Human readable file sizes
#
hugo --cleanDestinationDir && /usr/bin/time -f "\nTransfer in %e s" rsync -azh --stats --delete-delay public/ hugocodexorg@ams01.usecue.nl:public_html/