# Useful Tips


## Making an icon from a .png

First, use an image editor (e.g. Inkscape) make a square image that's at least 256x256px. Then, using [Image Magick](https://imagemagick.org/index.php): 

``` shell 

magick your_image.png -define icon:auto-resize=256,128,48,32,16 your_icon.ico
```