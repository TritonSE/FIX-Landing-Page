#!/bin/bash

find static/ \
-type f \
-name '*.png' | node compress_images
