---
title: Razones para actualizar Hugo a la versión 0.96
translationKey: reasons-to-upgrade-to-0-96
date: "2022-04-02"
---
Mi principal motivo para actualizar Hugo (desde la versión 0.81) a la versión 0.96 fue el soporte de idiomas para las fechas. Esto significa que ya no necesito búsquedas complejas para mostrar una fecha específica de cada idioma. Ahora puedo simplemente poner lo siguiente en mi archivo de configuración:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

Esto me permite mostrar una fecha específica del idioma usando: `{{ .Date | time.Format ":date_long" }}`. Lo que da como resultado una fecha en neerlandés así: '2 april 2022'. Genial, ¿verdad?

Otras razones para actualizar son:

- cada versión más reciente de Go hace que Hugo sea un poquito más rápido y/o consuma menos memoria
- corrección de errores
- más corrección de errores ;-)

Puedes encontrar más información en el [historial de versiones](https://github.com/gohugoio/hugo/releases).
