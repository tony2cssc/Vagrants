# -*- coding: utf_8 -*-

try:
    import pytesseract
    from PIL import Image
except ImportError:
    print('http://www.lfd.uci.edu/~gohlke/pythonlibs/#pil')
    print 'http://code.google.com/p/tesseract-ocr/'
    raise SystemExit
# image = Image.open('code.bmp')
# vcode = pytesseract.image_to_string(image)
# print vcode
try:
    original = Image.open("code.bmp")
except:
    print "Unable to load image"

gray = original.convert("L")
bw = gray.point(lambda x: 0 if x < 200 else 255, '1')
bw.save("result_bw.png")

vcode = pytesseract.image_to_string(original, psm='7')
print vcode
print "The size of the Image is: "
print(original.format, original.size, original.mode)
