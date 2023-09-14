from PIL import Image, ImageFilter
 
# creating a image object
imagetoedit = input("Path to Image: ")
im1 = Image.open(f"{imagetoedit}")

#filters
im2 = im1.filter(ImageFilter.BLUR)
 
im2.show()