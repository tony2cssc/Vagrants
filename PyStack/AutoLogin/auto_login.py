# -*- coding: utf-8 -*-
import urllib2
import cookielib
import urllib
from PIL import Image
import cStringIO
from pyocr import pyocr
import re
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

cookiejar = cookielib.MozillaCookieJar()
# 将一个保存cookie对象，和一个HTTP的cookie的处理器绑定
cookieSupport = urllib2.HTTPCookieProcessor(cookiejar)
# 创建一个opener，将保存了cookie的http处理器，还有设置一个handler用于处理http的
opener = urllib2.build_opener(cookieSupport)
# 将包含了cookie、http处理器、http的handler的资源和urllib2对象绑定在一起，
# 安装opener,此后调用urlopen()时都会使用安装过的opener对象，
urllib2.install_opener(opener)

login_page = "http://www.shbrightenplant.cn/"
login_url = "http://www.shbrightenplant.cn/dlck.asp"
home_page = "http://www.shbrightenplant.cn/main.asp"
verify_code_url = "http://www.shbrightenplant.cn/qtf/Dv_GetCode.asp"

file = urllib2.urlopen(verify_code_url).read()
# constructs a StringIO holding the image  AttributeError: addinfourl
# instance has no attribute 'seek'
img = cStringIO.StringIO(file)
im = Image.open(img)

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
digits = tool.image_to_string(im,
                              lang=lang,
                              builder=pyocr.tesseract.DigitBuilder(7))
print digits
im.save(digits + ".png")

cookies = ''
# 这里要从
for index, cookie in enumerate(cookiejar):
    # print '[', index, ']'
    # print cookie.name
    # print cookie.value
    # print "###########################"
    cookies = cookies + cookie.name + "=" + cookie.value + ";"
print "###########################"
cookie = cookies[:-1]
print "cookies:", cookie

username = "67445"
password = "125800qian"

# post请求头部
headers = {
    "Host": "www.shbrightenplant.cn",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 \
    Firefox/36.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,\
    */*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate",
    "DNT": "1",
    "Referer": "http://www.shbrightenplant.cn/index.asp",
    "Cookie": cookie,
    "Connection": "keep-alive",
}

postData = {
    "yyid": username,
    "yyxx": password,
    "yzm": digits,
    "dlan": "登录"
}

# 合成post数据
data = urllib.urlencode(postData)
print "data:###############"
print data
# 创建request
# 构造request请求
request = urllib2.Request(login_url, data, headers)
try:
    # 访问页面
    response = urllib2.urlopen(request)
    # cur_url =  response.geturl()
    # print "cur_url:",cur_url
    status = response.getcode()
    print status
except urllib2.HTTPError, e:
    print e.code

# 将响应的网页打印到文件中，方便自己排查错误
# 必须对网页进行解码处理
f = response.read().decode("gb2312")
outfile = open("rel_ip.txt", "w")
print >> outfile, "%s" % (f)


# 但因响应的信息
info = response.info()
print info

tag = "6228480030074708519"

if re.search(tag, f):
    # 登陆成功
    print 'Logged in successfully!'
else:
    # 登陆失败
    print 'Logged in failed, check result.html file for details'
