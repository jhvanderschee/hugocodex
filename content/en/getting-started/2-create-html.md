---
title: 2. Create some HTML
---

Now we have Hugo installed, let's start with a very simple webpage. First you have to create two files. First you create an empty file called 'config.yaml'. Then you create a file called 'index.html' with some simple HTML:

```
<html>
<head></head>
<body>
    This is a very simple webpage
</body>
</html>
```

You have to store the 'config.yaml' file in the root of your project and the 'index.html' file in a directory called 'layouts'. Your project will now look like this:

```
/layouts/index.html
/config.yaml
```

Now you can type the command 'hugo server' in the command line and press enter. Hugo will tell you your website lives on http://localhost:1313. When you go to that address in your browser, you will find your website.