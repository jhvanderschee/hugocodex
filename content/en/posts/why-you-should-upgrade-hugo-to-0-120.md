---
title: Why you should upgrade to Hugo v0.120
date: "2023-11-02"
---
When you are building multilingual websites and you are using a CMS then you want to upgrade to the latest Hugo version. Let me tell you why. Underscore index pages in your content directory (list pages of sections) needed a front matter entry to make the URL follow the permalink structure. In one of the more recent Hugo versions this has been fixed. You can now define the permalink of the list page in the config file! The individual pages are called 'page' and the list page is called 'section'. It looks like this if you use yaml:

```
permalinks:
  page:
    yoursection: /xyz/:filename
  section:
    yoursection: /xyz/
```

Awesome right? Now you do not have to bother your clients with the URL of the list page (if you have an `_index.md` file and make your front matter available for editing in your CMS). Well worth the upgrade if you ask me.