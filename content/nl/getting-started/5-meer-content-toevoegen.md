---
translationKey: add-other-content
title: 5. Nog een contentbestand toevoegen
---

Onze website begint vorm te krijgen ;-). Maar we missen nog een nette contactpagina. Om die te maken, maken we een bestand '/content/contact.md'. Dat bestand ziet er zo uit:

```
---
title: Contactpagina
---
Stuur me een e-mail op joost@vdschee.nl
```

We hadden al een layoutbestand (home.html), maar dat bestand gold alleen voor de homepage. Daarom hebben we nu een tweede bestand nodig. Dat bestand mag een exacte kopie van 'home.html' zijn en moet je 'page.html' noemen. Dit bestand sla je op in de map '/layouts/'.

Je project ziet er nu zo uit:

```
/content/_index.md
/content/contact.md
/layouts/home.html
/layouts/page.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```

Mij viel op dat ik Hugo voor deze wijzigingen opnieuw moest starten. Dat doe je door Ctrl-C te drukken en het commando 'hugo server' opnieuw op de command line in te voeren.
