---
title: New window fix
---

### Introduction

According to many site owners, PDF documents and external links should open in a new window. Markdown makes it relatively hard to specify this. This script automates this for you, so you do not have to worry about this.

### How it works

This script detects external links and links to PDF files, using plain javascript. It automagically adds 'target="_blank"' to these links. This is done by the following code.

[expand]

```
{% include new-window-fix.html %}
```

[/expand]

### Installation

Step 1. Download the file [new-window-fix.html](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/_includes/new-window-fix.html)
<br />Step 2. Save the file in the '_includes' directory of your project
<br />Step 3. Make sure the bottom of your layout document looks like this:

```
{% raw %}...
{% include new-window-fix.html %}
</body>
</html>{% endraw %}
```