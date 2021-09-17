---
title: Lessons learned porting from Jekyll
date: 2021-08-10T00:00:00-00:00
---

I have been buiding around 30 Jekyll websites per year in the last 6 years. I recently switched completely to Jekyll and I have been porting multiple websites from Jekyll to Hugo. I learned a few things along the way that you will need to know too, when you make the step from Jekyll to Hugo. I have been having a hard time with learning Hugo, but in the end it is worth it, especially because of the low build times and the build-in image conversion. 

Know that this is going to be a living document, so make sure to come back later to check this document again.

## Directory structure

### Collections

In Hugo 'collections' are called 'sections'. I personally do not like that name at all, but we have to live with it. A section is a first level directory in the content directory OR a directory with a '\_index.md' file in it. A directory with an 'index.md' file in it is NO section (but a 'page bundle'). When you create a multilingual website you use the first level directories for the languages and the second level directories for sections/collections.

### Layouts

You can have layouts that you name in your front matter, but those layouts should live in their section directory within the 'layouts' directory. For pages this should be the 'page' directory.

### Content files

Where Jekyll assumes all .md files are content, Hugo requires you to use a content directory ('content' by default) and put your .md files in that directory.

### Static files

Jekyll assumes all files are static. This is not the case in Hugo. When you have static files, like stylesheets or images, you have to put them in the 'static' directory.

### Data

Data is the only directory that is the same in Jekyll and Hugo. You can rename your '.yml' to '.yaml' to make them backwards compatible with older Hugo versions.

### Builds

Jekyll builds your website in de '\_site' directory on every update. Hugo only builds your website when you call the hugo command (instead of 'hugo server'). Hugo builds your website in a directory called 'public'. 

### Resources

Hugo is able to resize images. These resized images end up in the 'resources' directory in the 'gen' folder. Jekyll does not have this directory or feature.

## Config settings

### About the config file

In Jekyll the config file is called '\_config.yml'. In Hugo this is 'config.yaml'. Note that in modern versions of Hugo you can also use the 'yml' extension. Another remarkable thing is that Jekyll requires you to list your collections in the config file. Hugo does not have this requirement. 

### Preventing output

When you want to prevent output on a section/collection, you can wirte 'output: false' in Jekyll's config file. This is not possible in Hugo. The workaround is to create an empty 'single.html' in the layouts directory in the folder corresponding with the section/collection you want this to apply to. There is another trick that works, which is [this one](https://gohugo.io/content-management/build-options/#listing-pages-without-publishing-them).

### Setting permalinks

In Jekyll I love to use 'permalinks: pretty' and then some specific defaults for each collection. This works a little different in Hugo. Hugo allows you to simply list all sections under the 'permalinks' key in the config file. A logical key-value-pair (under this key) would be 'sectionname: /desiredpath/:filename'. The last portion (:filename) stands for the filename without extension. Another example is 'posts: /:year/:month/:title/'. This slugifies the title and adds the year and month to prevent URL collisions.

### Custom site variables

Custom site variables are not written as children of the root, but as children of the 'params' key in the config file. They can be called by using the '.Site.Params.customvariable', where 'customvariable' is actually the name of your custom variable.

## Tips and tricks

### Getting the slug of the page

There is no such thing as 'page.slug'. You have to use '.File.BaseFileName' instead.

### Filter a section on a parameter in an array

When you want to show all items from a section that contain a certain key in an array (i.e. all cars with leather seats as one of their features), you should do a 'range' (loop) over '.Site.RegularPages' where 'Section' equals 'cars'. Then you should create an 'if' statement where you check with the 'in' command of the '$.Page.Params.features' contains the slug of the feature, using '.File.BaseFileName'. This looks like this:

```
{{- range where .Site.RegularPages "Section" "cars" -}}
    {{- if in $.Page.Params.features .File.BaseFileName -}}
        ...
    {{- end -}}
{{- end -}}
```