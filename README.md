# A Quick Introduction to Handlebars

## What is Handlebars?

Handlebars is a simple front end templating engine that allows you to dynamically create your web page.

## What Can Handlebars Do?

Handlebars has very simple logic built into. You can use if and each statements, basically whatever you normally use in the erb files. There are a few more features, but you can find all that at the [Handlebars](http://handlebarsjs.com/) website.

Because it has very simple logic, I consider it to be less powerful than embedded Ruby files.

But in this workshop, I'll teach you how to use it for server-side and client-side rendering

## Why Handlebars?

In terms of using it for the server-side, it's good if you don't like seeing a lot of logic in your files.

But in terms of using it for client side, there's a huge debate on weather to use server-side rendering or client-side rendering. Right now might not be a huge deal when you're at DBC since you're not making ginormous products used by millions of people.

One reason is loading time. A lot of tests has found that client-side rendering is just a bit faster than server-side rendering.

Another reason is that sending JSON data over takes less space than sending an entire block of HTML code. For example, the JSON could be 1KB and the HTML code could be 3KB. Not much for you, but if you're Facebook where millions of users access your site, the difference of 2KB is a lot. Yes, people have to download the template, but you can cache that so they don't have to download it again.

## Any Cons For Using Handlebars?

The if statement can only evaluate if a statement is true or false. You can't put a conditional like if name == 'Alfred'. If you want to do more complicated stuff, you need to write your own helper methods.

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
