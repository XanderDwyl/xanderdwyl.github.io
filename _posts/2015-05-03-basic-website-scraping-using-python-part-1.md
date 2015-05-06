---
layout: post
title:  "Basic Website Scraping Using Python - Part 1!"
author: XanderDwyl
date:   2015-05-03 9:15:00
categories: [Web, Development]
excerpt: Web Scraping is a computer software technique of extracting information from websites or web harvesting, other called as web data extraction.
---
Web Scraping is a computer software technique of extracting information from websites or web harvesting, other called as web data extraction. Now, I'm going to give you the basic way in scraping website using Python with BeautifulSoup.

In this example, we're using Python 2.7.6, <a href="http://www.crummy.com/software/BeautifulSoup/">beautifulsoup 4 ( 4.3.2 )</a> and <a href="http://docs.python-requests.org/en/latest/">Requests</a>.

To install python, follow this <a href="https://wiki.python.org/moin/BeginnersGuide/Download">link</a>.

Let's get started.

First, we're going to create some references of the modules that can be use in scraping data. This is just the basic modules that we need for now.

{% highlight python %}

# create reference to urlopen modules with in urllib
from urllib import urlopen

# create reference to BeautifulSoup modules with in bs4
from bs4 import BeautifulSoup

# reference for Regular Expression and Time
import re, time

{% endhighlight %}

Next, we're going to access the reference module to open a website page.

{% highlight python %}

webpage = urlopen('http://<-- anywebsite -->/').read()

# print the website page element
print webpage
{% endhighlight %}

It really pays to take pause and review little on a code and play around on displayed render HTML for a certain website on your 'choice' and I will give you enough time to analyze the pattern on the render HTML. On my next post I will discuss on how Regular Expression works in web scraping, just read in advance about Regular Expression.

Want to chat about this post? I'd love to hear from you. Feel free to send me a message or comment on the box below.
