---
title: Lessons learned porting from Jekyll
---

I have been porting multiple websites from Jekyll to Hugo and learned a few things along the way. I want to share them with you, so you can benifit from them. This is going to be a living document, so make sure to check this document later.

## Directory structure

### Collections

In Hugo 'collections' are called 'sections'. I personally do not like that name at all, but we have to live with it. A section is a first level directory in the content directory OR a directory with a '\_index.md' file in it. A directory with an 'index.md' file in it is NO section (but a 'page bundle').

### Layouts

You can have layouts that you name in your front matter, but those layouts should live in their section directory within the 'layouts' directory. For pages this should be the 'page' direcotory.

### Content files

Where Jekyll assumes all .md files are content, Hugo requires you to use a content directory ('content' by default).

### Static files

Jekyll assumes all files are static. This is not the case in Hugo. When you have static files, like stylesheets or images, you have to put them in the 'static' directory.

### Data

Data is the only directory that is the same in Jekyll and Hugo.

### Builds

Jekyll builds your website in de '\_site' directory on every update. Hugo only builds your website when you call the hugo command (instead of 'hugo server'). Hugo builds your website in a directory called 'public'. 

### Resources

Hugo is able to resize images. These resized images end up in the 'resources' directory in the 'gen' folder. Jekyll does not have this directory or feature.

## Config settings

### About the config file

In Jekyll the config file is called '\_config.yml'. In Hugo this is 'config.yaml'. Note that in modern versions of Hugo you can also use the 'yml' extension. Another remarkable thing is that Jekyll requires you have to list your collections in the config file. Hugo does not have this requirement. 

### Preventing output

When you want to prevent output on a section/collection, you can wirte 'output: false' in Jekyll's config file. This is not possible in Hugo. The workaround is to create an empty 'single.html' in the layouts directory in the folder corresponding with the section/collection you want this to apply to.

### Setting permalinks

In Jekyll I love to use 'permalinks: pretty' and then some specific defaults for each collection. This works a little different in Hugo.

### Custom site variables

