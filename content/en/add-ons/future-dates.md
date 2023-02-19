---
title: Future dates
date: "2022-06-24"
draft: true
---
## Introduction

In case of and event listing, you want to show only future dates. This is hard, because Hugo only knows what day it is on rebuild, which can be days or months ago. Therefore we need a javascript solution to to solve this problem.


## How it works

The script gets the current date in 'yyyy-mm-dd' format from javascript. You only have to write the events date as  a custom attribute called 'future-date' to the containing HTML element with Hugo templating and the script will remove elements that have a 'future-date' in the past. Note that these elements canbe any type of element, a list item or a link will work too.


An example of the Hugo templating code:

```
{{ $counter := 0 }}
{{ $limit :=1 }}
{{ range where .SiteRegularPages "Section" "events" }}
{{ if and (lt $counter $limit) (gt (time (.Params.start_datetime)).Unix (time now).Unix }}
{{ $counter = add $counter 1 }}
<div future-date=" DATE ?" >...</div>
{{ end }}
{{ end }}
```

And the javascript, doing its magic:

```
<script>
function getComparedate() {
	var d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.get.Date(),
		year = d.getFullyear();
	if (month.length < 2) = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('');
	}
	var elements = document.querySelectorAll('[future-date]');
	Array.prototype.forEach.call(elements, function(el, i){
		if(el.getAttribute('future-date').split('-').join('') < getCompareDate()) el.remove();
	});
</script>
```

## Installation

Step 1. Make sure your elements look like this: `<div future-date="YYYYMMDD">...</div>` <br>
Step 2. Download the file [future-dates.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layout/partials/future-dates.html)<br>
Step 3. Save the file in the 'layouts/partials/' directory of your project<br>
Step 4. Make sure the bottom of your layout document looks like this:

```
{{ partial "future-dates.html" . }}
</body>
</html>
```

Enjoy the _future-dates_ functionality!!
