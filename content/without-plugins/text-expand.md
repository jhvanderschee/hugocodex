---
title: Text expand

---
### Introduction

Sometimes when you want to create a 'read more' link, it is overkill to create a whole new page. In that case a text expand functionality, using javascript is very useful. On this website it is used for clarity and brevity.

### How it works

The script looks for an `[expand]` tag on a single line and then looks for the `[/expand]` tag (again on a single line, thus being the only content of its paragraph). When it finds these it will add some classes and hide everything in between. It will show a 'read more &rarr;' link, indicating the text can be expanded.

[expand]

```
$( document ).ready(function() {
    $("p").each(function() {
        if($(this).html()=='[expand]') {
            $(this).addClass('expand_start');
        }
        if($(this).html()=='[/expand]') {
            $(this).addClass('expand_end');
        }
    });
    $( "p.expand_start" ).each(function() {
        $(this).nextUntil( $("p.expand_end") ).wrapAll("<div class='expand' style='overflow: hidden;'></div>");
        $(this).prev().append('<span>..&nbsp; <a style="cursor: pointer;" onclick="$(this).parent().parent().next().slideToggle(); $(this).parent().hide();">read&nbsp;more&nbsp;&rarr;</a></span>');
        $(this).remove()
    });
    $( ".expand").hide();
    $( "p.expand_end" ).hide();
});
```

[/expand]

### Installation

Step 1. Download the file [text-expand.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/gh-pages/layouts/partials/text-expand.html)
<br />Step 2. Save the file in the 'layouts/partials' directory of your project
<br />Step 3. Make sure the bottom of your layout document looks like this:

```
...
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
{{ partial "text-expand.html" . }}
</body>
</html>
```