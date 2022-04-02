---
title: Reasons to upgrade to upgrade to 0.96
date: '2022-04-02'
---

My main reason to upgrade (from 0.81) to Hugo version 0.96 was the language support for dates. This means that you no longer need strange lookups to get a language specific date display. You can now simply set the following things in your config file:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

This allows you to output a language specific date like this: `{{ .Date | time.Format ":date_long" }}`.