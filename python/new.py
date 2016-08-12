from HTMLParser import HTMLParser
class MyHTMLParser(HTMLParser):
    def handle_data(self, data):
        print "Data     :", data

f=open("Fire - Simple English Wikipedia, the free encyclopedia.html","r")
s=f.read()
parser = MyHTMLParser()
parser.feed(s)
