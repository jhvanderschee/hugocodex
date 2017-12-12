---
title: Migrating from Jekyll to Hugo
date: 2017-12-10 00:00:00 +0000

---
 
Let me be honest. Migrating from Jekyll to Hugo was not as easy as I thought. 

The first problem was understanding the folder structure. The Hugo manual is not very clear about the best practise. I have figured out that you need at least three files. You need an 'index.html' for the front page, that you need to place in your 'layouts' folder. Additionally you need a '_default' folder with a 'single.html' and a 'list.html' file. Their names tell you what they do: showing a page that lists the content of a specific content type (section) and showing a regular content page. If you want an alternative list template for posts (or any other content type, called 'section'), just create a folder next to your '_default' folder with the name of your content type, in this case 'posts'. Fill this directory with adjusted copies of your default files.

The second problem was the Go templating language. It is not very straight forward and the documentation is very limited. For example, I could not find a basic `if else` statement, like this: `{{ if gt (len . ) 0 }}`, which appears to be valid. The dot here refers to the item in the loop, which is also not (clearly) explained in the docs. The possible combination of `if` and `gt` (greater than) is also not mentioned. I had to find these things in examples from people in the community. To be able to read the Go templating language code, you have to know that the function always comes first, followed by its variables. The example `{{ if gt (len . ) 0 }}` litteraly means 'if | greater than | length of the current item | zero'. You have to understand this means 'if the length of the current item is greater than zero'. From a language/grammer point this is not very logical. It takes a while to get used to this notation.