---
title: Migratiestappen voor Hugo v0.147.9
translationKey: migration-steps-for-v-0-147-9
date: 2025-07-01
---

Om volledig naar v0.147.9 te migreren moet je de volgende stappen doorlopen (als je dat nog niet gedaan hebt):

- verplaats alles uit de map `_default` naar de root van de map `layouts`
- verwijder de map `_default`
- hernoem alle `single.html`-bestanden naar `page.html`
- hernoem alle `list.html`-bestanden naar `section.html`
- verplaats alles uit de map `layouts/page` naar de root van de map `layouts`
- verwijder de map `page`
- hernoem het bestand config.yaml (of toml/json) naar hugo.yaml (of toml/json)
- vervang `:filename` door `:contentbasename`

Had je zowel een `single.html` in je map `layouts` als een single in je map `layouts/page`, volg dan [deze instructies](https://discourse.gohugo.io/t/possible-bug-single-layout-for-pages-in-v0-147-9/55179/8).
