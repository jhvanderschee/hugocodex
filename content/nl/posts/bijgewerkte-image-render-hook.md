---
title: Bijgewerkte image render hook
translationKey: updated-image-hook
date: 2024-09-23
---

Ik heb de image render hook uit mijn artikel [Alle afbeeldingen verkleinen](/nl/blog/alle-afbeeldingen-verkleinen/) bijgewerkt. Hij controleert nu op SVG-afbeeldingen en gaat daar goed mee om. Daarnaast gebruik ik 'with' om te controleren of de image resource bestaat.


```
{{ with (resources.GetMatch .Destination) }}
    {{ if ne .MediaType.SubType "svg" }}
        <img src="{{ (.Resize `900x jpg Smart q50`).RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ else }}
        <img src="{{ .RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ end }}
{{ end }}
```
