---
title: Brekende wijziging in summary
translationKey: breaking-summary-change
date: 2024-10-10
---

Ik kwam erachter dat er in [release 0.134 van Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.134.0) een breaking change is doorgevoerd. Een automatisch gegenereerde `{{ .Summary }}` geeft niet langer platte content terug. Dat kan je twee keer doen nadenken voordat je Hugo naar de nieuwste versie bijwerkt. Dit probleem is alleen op te lossen door `{{ .Summary }}` te vervangen door `{{ .Summary | plainify }}` op alle plekken waar je automatische samenvattingen gebruikt, en dat is nogal wat werk. Je bent gewaarschuwd!
