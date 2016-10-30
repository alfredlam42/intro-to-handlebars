# A Quick Introduction to Handlebars

## What is Handlebars?

Handlebars is a simple front end templating engine that allows you to dynamically create your web page.

## Why Handlebars?

Doesn't Sinatra let us dynamically create our pages?

Yes, it does, but there are other reasons to use Handlebars as well.

When you use Sinatra, you usually only send one erb file and that contains all the HTML. Or if you send a partial, you can only send one partial.

This might not be a huge deal when you're making a small simple site, but when you scale and create a huge project, it might be beneficial to break things down into their own components so that when you want to look for a specific part of your website to work on, it'll be easy to find. If a page has a huge amount of HTML, it might be hard to recognize or find what you want to work on.

## What Can Handlebars Do?

Handlebars has very simple logic built into. You can use if and each statements, basically whatever you normally use in the erb files. There are a few more features, but you can find all that at the [Handlebars](http://handlebarsjs.com/) website.

## Any Cons For Using Handlebars?

The if statement can only evaluate if a statement is true or false. You can't put a conditional like if name == 'Alfred'.

It's also very bad for SEO.

Because everything is added through Javascript after loading, it seems like a blank page to the web crawlers.

That's the only thing I can think of at the moment.

## Setting Up Handlebars

Add this to your layouts page or where ever you like. You might want to always check the CDN if there is an updated version to use.
```HTML
<script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
```

If you want to precompile your templates (which I recommend) you should install Handlebars globally on your machine.
```
npm install handlebars -g
```

Here's the command to remember when you want to compile all your templates. You're going to need to compile every time you make a change, which is annoying.
```
handlebars <template directory> -f <filename>
```

You don't need to precompile your templates because you can compile it when someone loads the website. It's not recommended because it might slow down the loading speed of the page.
