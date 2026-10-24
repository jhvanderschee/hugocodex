---
title: Redenen om Hugo te upgraden naar versie 0.96
translationKey: reasons-to-upgrade-to-0-96
date: "2022-04-02"
---
Mijn belangrijkste reden om Hugo (van versie 0.81) naar versie 0.96 te upgraden was de taalondersteuning voor datums. Dat betekent dat ik geen ingewikkelde lookups meer nodig heb om een datum taalspecifiek weer te geven. Ik kan nu simpelweg het volgende in mijn configuratiebestand zetten:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

Daarmee kan ik een taalspecifieke datum tonen met: `{{ .Date | time.Format ":date_long" }}`. Dat levert een Nederlandse datum op als deze: '2 april 2022'. Mooi toch?

Andere redenen om te upgraden zijn:

- elke nieuwere versie van Go maakt Hugo een beetje sneller en/of minder geheugenintensief
- bugfixes
- nog meer bugfixes ;-)

Meer informatie vind je in de [release-geschiedenis](https://github.com/gohugoio/hugo/releases).
