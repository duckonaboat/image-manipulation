from PIL import Image, ImageFilter
import importlib
 
#getting image
imagetoedit = input("Path to Image: ")
im1 = Image.open(f"{imagetoedit}")

#filters
im2 = im1.filter(ImageFilter.BLUR)
im3 = im1.filter(ImageFilter.CONTOUR)
im4 = im1.filter(ImageFilter.DETAIL)
im5 = im1.filter(ImageFilter.EDGE_ENHANCE_MORE)
im6 = im1.filter(ImageFilter.EMBOSS)
im7 = im1.filter(ImageFilter.FIND_EDGES)
im8 = im1.filter(ImageFilter.SHARPEN)
im9 = im1.filter(ImageFilter.SMOOTH)
im10 = im1.filter(ImageFilter.SMOOTH_MORE)


#Defiantly a better way to do this but it works for now.
filtertoapply = input("Filter: ")
if filtertoapply == "im2":
    im2.show()
if filtertoapply == "im3":
    im3.show()
if filtertoapply == "im4":
    im4.show()
if filtertoapply == "im5":
    im5.show()
if filtertoapply == "im6":
    im6.show()
if filtertoapply == "im7":
    im7.show()