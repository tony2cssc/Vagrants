from PIL import Image
import sys

from pyocr import pyocr
from pyocr import builders

tools = pyocr.get_available_tools()
if len(tools) == 0:
    print("No OCR tool found")
    sys.exit(1)
tool = tools[0]
print("Will use tool '%s'" % (tool.get_name()))
# Ex: Will use tool 'tesseract'

langs = tool.get_available_languages()
print("Available languages: %s" % ", ".join(langs))
lang = langs[2]
print("Will use lang '%s'" % (lang))
# Ex: Will use lang 'fra'
original = Image.open('1352.png')

gray = original.convert("L")
bw = gray.point(lambda x: 0 if x < 200 else 255, '1')
bw.save("result_bw.png")

txt = tool.image_to_string(bw,
                           lang=lang,
                           builder=builders.TextBuilder(8))
print txt

word_boxes = tool.image_to_string(original,
                                  lang=lang,
                                  builder=builders.WordBoxBuilder())

print word_boxes

line_and_word_boxes = tool.image_to_string(
    original, lang=lang,
    builder=builders.LineBoxBuilder())
print line_and_word_boxes

# Digits - Only Tesseract
digits = tool.image_to_string(bw,
                              lang=lang,
                              builder=pyocr.tesseract.DigitBuilder(7))
print digits
