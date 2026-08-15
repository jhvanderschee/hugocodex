---
title: Fechas futuras
date: "2022-06-24"
---
## Introducción

En un listado de eventos quieres mostrar únicamente las fechas futuras. Esto es complicado, porque Hugo solo sabe qué día es en el momento de la reconstrucción, que puede haber sido hace días o meses. Por eso necesitamos una solución con javascript para resolver este problema.


## Cómo funciona

El script obtiene la fecha actual en formato 'yyyy-mm-dd' desde javascript. Solo tienes que escribir la fecha del evento como un atributo personalizado llamado 'future-date' en el elemento HTML contenedor mediante las plantillas de Hugo, y el script eliminará los elementos cuya 'future-date' esté en el pasado. Ten en cuenta que estos elementos pueden ser de cualquier tipo: un elemento de lista o un enlace también funcionan.


Un ejemplo del código de plantillas de Hugo:

```
{{ $counter := 0 }}
{{ $limit :=1 }}
{{ range where .SiteRegularPages "Section" "events" }}
{{ if and (lt $counter $limit) (gt (time (.Params.start_datetime)).Unix (time now).Unix }}
{{ $counter = add $counter 1 }}
<div future-date=" DATE ?" >...</div>
{{ end }}
{{ end }}
```

Y el javascript, haciendo su magia:

```
<script>
function getComparedate() {
	var d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.get.Date(),
		year = d.getFullyear();
	if (month.length < 2) = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('');
	}
	var elements = document.querySelectorAll('[future-date]');
	Array.prototype.forEach.call(elements, function(el, i){
		if(el.getAttribute('future-date').split('-').join('') < getCompareDate()) el.remove();
	});
</script>
```

## Instalación

Paso 1. Asegúrate de que tus elementos se vean así: `<div future-date="YYYYMMDD">...</div>` <br>
Paso 2. Descarga el archivo [future-dates.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layout/_partials/future-dates.html)<br>
Paso 3. Guarda el archivo en el directorio 'layouts/_partials/' de tu proyecto<br>
Paso 4. Asegúrate de que el final de tu documento de plantilla se vea así:

```
{{ partial "future-dates.html" . }}
</body>
</html>
```

¡¡Disfruta de la funcionalidad de _fechas futuras_!!
