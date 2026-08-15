---
title: Depurando Hugo
translationKey: debugging-hugo
date: 2022-10-05
---

Llevo ya medio año construyendo sitios web con Hugo. En estos últimos seis meses he sufrido mucho y he aprendido mucho. He aprendido que mi estrategia de aprendizaje es "aprender a base de errores".
Así que, mirando atrás, ahora me digo a mí mismo: ¿no será el momento de aprender a depurar Hugo como es debido?

Me estoy enfrentando a un problema en el que hay que dar estilo a un layout añadiendo una clase CSS bajo cierta condición, con

```
  <body class="{{ .Type }} {{ .Layout }}">
```

  Leyendo [la pregunta de An en el foro](https://discourse.gohugo.io/t/add-css-class-depending-on-layout-type/1989) tengo un punto de partida para depurar.
Ahora sé que añadiendo:

```
{{ printf "%#v" . }}
```
puedo leer fácilmente la lista de todas las variables del contexto actual (., también llamado “el punto”).
En mi caso concreto,

```
{{ printf "%#v" .Layout }}
```

¡me dirá qué layout se está usando en una página!

Sí, [la documentación de Hugo](https://gohugo.io/templates/template-debugging/#readout) es a veces algo rara o incompleta. Por otro lado, el [canal de Discourse](https://discourse.gohugo.io/) es un lugar maravilloso para aprender Hugo. El tiempo que la gente dedica a ayudar a todo el mundo. ¡Nos vemos por allí!



¡Feliz programación!
