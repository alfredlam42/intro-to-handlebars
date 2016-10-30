# A Quick Introduction to Handlebars

## What is Handlebars?

Handlebars is a simple front end templating engine that allows you to dynamically create your web page.

## Why Handlebars?

Doesn't Sinatra let us dynamically create our pages?

Yes, it does, but there are other reasons to use Handlebars as well.

When you use Sinatra, you usually only send one erb file and that contains all the HTML. Or if you send a partial, you can only send one partial.

This might not be a huge deal when you're making a small simple site, but when you scale and create a huge project, it might be beneficial to break things down into their own components so that when you want to look for a specific part of your website to work on, it'll be easy to find. If a page has a huge amount of HTML, it might be hard to recognize or find what you want to work on.

## What Can Handlebars Do?

Handlebars has very simple logic built into. You can use if and each statements, basically whatever you normally use in the erb files. There are a few more features, but you can find all that at the (http://handlebarsjs.com/)[Handlebars] website.