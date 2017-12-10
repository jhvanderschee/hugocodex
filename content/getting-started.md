---
title: Getting started
type: page
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

Now you create an 'index.html' file and you replace your PHP tags with Go templating tags, like so:

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

This 'index.html' file is your new homepage template. You need to store it in a root folder named: 'layouts/_defaults'. You might want to make a copy of this file and call it 'single.html'. You need to place the html files you want to include in a root folder named: 'layouts/partials'. Finally you have to create a root folder 'content' and create a very simple 'index.md' file that looks like this:


```
---
title: Hello world
---
Hello everybody!
```

## Step 2. Preview your website

Opening the 'index.md' file in your browser does not work, so you need to have an enivronment that runs Hugo. You can install Jekyll through command-line on your own machine. Just follow these simple instructions:


* install instructions coming soon...

## Step 3. Host your website

Oh, how I hate shared hosting accounts... untill Hugo. Shared hosting accounts are cheap but unreliable. However, a Git based static site provides us with a back-up (actually the source code), which makes me feel a whole lot safer. Forestry.io exports the static version of your site to an FTP account on every update, enabling you to use an hosting environment of your choice. Just connect your FTP account through the Forestry.io deploy options. So if your cheap hosting account goes down, the source code will still live on in Git and in your Forestry.io environment, enabling you to push the site to another cheap hosting account. Isn't that reassuring?