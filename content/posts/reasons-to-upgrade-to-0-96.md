---
title: Reasons to upgrade Hugo to version 0.96
date: '2022-04-02'
---

My main reason to upgrade Hugo (from version 0.81) to version 0.96 was the language support for dates. This means that I no longer need complex lookups to get a language specific date display. I can now simply set the following things in my config file:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

This allows me to output a language specific date like this: `{{ .Date | time.Format ":date_long" }}`. Which results in a Dutch date like this: '2 april 2022'. Great, right?