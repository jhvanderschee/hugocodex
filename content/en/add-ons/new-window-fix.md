---
title: New window fix
---

### Introduction

According to many site owners, PDF documents and external links should open in a new window. Markdown makes it relatively hard to specify this. This script automates this for you, so you do not have to worry about this.

### How it works

This script detects external links and links to PDF files, using plain javascript. It automagically adds 'target="_blank"' to these links, like [this one](/uploads/commerce.pdf). This is done by the following code.

[expand]

```
//open external links in a new window
function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        var b = c[a];
        if(b.getAttribute("href") && b.hostname !== location.hostname) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}
//open PDF links in a new window
function pdf_new_window ()
{
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var eleLink=0; eleLink < links.length; eleLink ++) {
    if ((links[eleLink].href.indexOf('.pdf') !== -1)||(links[eleLink].href.indexOf('.doc') !== -1)||(links[eleLink].href.indexOf('.docx') !== -1)) {
        links[eleLink].onclick =
        function() {
            window.open(this.href);
            return false;
        }
    }
    }
} 
pdf_new_window();
external_new_window();
```

[/expand]

### Installation

Step 1. Download the file [new-window-fix.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/new-window-fix.js)
<br />Step 2. Save the file in the 'static/js' directory of your project
<br />Step 3. Make sure the bottom of your layout document looks like this:

```
...
<script type="text/javascript" src="/js/new-window-fix.js"></script>
</body>
</html>
```