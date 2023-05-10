
find static/ \
-type f \
-name '*.avif' \
-o -name '*.png' \
-o -name '*.avif' | node compress_images
