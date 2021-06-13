---
title: 'Getting started'
---
## Step 1. Create a basic website

A website typically consists of a few elements. The header with a menu, a sidebar, the content and the footer. Back in the days we used frames to put these components together. Nowadays we use includes. These includes require a programming language to work, like PHP. Using PHP however introduces a lot of vulnerabilities. What if we could prevent that by design? Well... you can with Hugo.

You used to create an 'index.php' file and do something like this:

```
<html>
<head></head>
<body>
<?php include('header.php'); ?>
content
<?php include('sidebar.php'); ?>
<?php include('footer.php'); ?>
</body>
</html>
```

Now you create an 'home.html' file and you replace your PHP tags with Go templating tags, like so:

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

This 'home.html' file is your new homepage template. You need to store it in your project folder under 'layouts'. You might want to make a copy of this file in 'layouts/_defaults' and call it 'single.html'. You need to place the html files you want to include in your project folder under 'layouts/partials'. Finally you have to create a root folder 'content' in your project and fill it with an '_index.md' file that looks like this:


```
---
title: Hello world
---
Your content here...
```

To create an overview page, look at this example.

[expand]

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
<ul>
  {{ range (where .Data.Pages "Section" .Section ).ByTitle }}
    <li><a href="{{ .Parmalink }}">{{ .Title }}</a></li>
  {{ end }}
</ul>
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

Put this code in a file called 'list.html' and store it in your 'layouts/_defaults' folder, next to your 'single.html'. Your file tree will now look like this:

```
├── config.yaml
├── content
│   └── _index.md
└── layouts
    ├── home.html
    ├── _defaults
    │   ├── list.html
    │   └── single.html
    └── partials
        ├── footer.html
        ├── header.html
        └── sidebar.html

4 directories, 8 files
```

[/expand]

## Step 2. Preview your website

Opening the folder of your project in a browser does not work, so you need to have an enivronment that runs Hugo. You can install Jekyll through command-line on your own machine. Just follow these simple instructions:

* install Hugo with [these simple instructions](https://gohugo.io/getting-started/installing/)
* open a terminal in your project folder and type: `hugo server`
* go to [http://127.0.0.1:1313/](http://127.0.0.1:1313/) and preview your website

## Step 3. Host your website

Oh, how I hate shared hosting accounts… untill Hugo. Shared hosting accounts are cheap but unreliable. However, a Git based static site provides us with a back-up (actually the source code), which makes me feel a whole lot safer. CloudCannon exports the static version of your site to an FTP account on every update, enabling you to use an hosting environment of your choice. Just connect your FTP account through the CloudCannon options. So if your cheap hosting account goes down, the source code will still live on in Git and in your CloudCannon environment, enabling you to push the site to another cheap hosting account. Isn’t that reassuring?

Here is your walk-through:

- Create a free account at cloudcannon.com
- Create a website and name it
- Select Hugo as the site buider
- Create an empty ‘config.yaml’ file in the root
- Upload your ‘home.html’ file to the ‘layouts’ directory
- Upload your ‘_index.md’ file to the ‘contents’ directory
- Visit your website on the URL CloudCannon created for you
