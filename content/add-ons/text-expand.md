---
title: Text expand

---
### Introduction

Sometimes when you want to create a 'read more' link, it is overkill to create a whole new page. In that case a text expand functionality, using javascript is very useful. On this website it is used for clarity and brevity.

### How it works

The script looks for an `[expand]` tag on a single line and then looks for the `[/expand]` tag (again on a single line, thus being the only content of its paragraph). When it finds these it will add some classes and hide everything in between. It will show a 'read more &rarr;' link, indicating the text can be expanded.

### Installation

Step 1. Download the file [text-expand.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/master/static/js/text-expand.js)
<br />Step 2. Save the file in the 'static/js' directory of your project
<br />Step 3. Make sure the bottom of your layout document looks like this:

```
...
<script type="text/javascript" src="/js/text-expand.js"></script>
</body>
</html>
```