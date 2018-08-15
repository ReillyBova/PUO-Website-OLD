ffmpeg -y -i test.mov -c:v libx264 -preset medium -b:v 1000k -pass 1 -an -f mp4 /dev/null && ffmpeg -i test.mov -c:v libx264 -preset medium -b:v 1000k -pass 2 -an output3.mp4
