---
title: Añadir analítica a tu web con Hugo
translationKey: adding-analytics-to-your-hugo-website
date: 2023-02-03
---

Para tener analítica en un sitio web Jamstack con Hugo puedes usar uno de estos enfoques:

- Herramientas de analítica de terceros como Google Analytics o Matomo. Estas herramientas proporcionan un código de seguimiento que puedes incrustar en tu web JAMstack para recoger datos sobre el comportamiento de los usuarios.
- Seguimiento propio en el servidor: puedes usar una función serverless para registrar los datos de comportamiento de los usuarios y guardarlos en una base de datos.
- Usar un proveedor de servicios todo en uno.

Cabe señalar que las tres opciones tienen sus inconvenientes.

### Analítica de terceros

La primera solución puede parecer gratuita, pero lo más probable es que incumpla el RGPD. Lo mejor es usar una solución de pago respetuosa con la privacidad, como la [versión Cloud de Matomo](https://matomo.org) (antes Piwik).

### Analítica en el servidor

La segunda solución, el seguimiento en el servidor, requiere que montes un servidor tradicional (como un stack LAMP o MEAN) o funciones serverless para recoger y procesar los datos analíticos. Te exigirá programar tú mismo la analítica o instalar una solución de código abierto. Una buena opción es instalar el bueno (aunque antiguo) [AWstats](https://www.awstats.org/).

### Un proveedor de servicios todo en uno

La tercera opción es un proveedor de servicios todo en uno que incluya analítica. Esta opción lo más probable es que te cueste dinero. Hay varios proveedores todo en uno, como [Netlify](https://www.netlify.com/) y [CloudCannon](https://cloudcannon.com/). Netlify cuesta 9 dólares por web y mes (solo por la analítica). CloudCannon tiene estadísticas de uso acumuladas integradas (muy limitadas) y empieza en 45 dólares al mes.

Ten en cuenta que yo gestiono UN MONTÓN de sitios web con Hugo. He montado mi propio servicio todo en uno SOLO para webs con Hugo. Es una ventanilla única con tarifa fija que incluye analítica. Te muestra el tráfico y las visitas por mes y por día. ¿Más información? ¡Echa un vistazo a [cms.usecue.com](https://cms.usecue.com/)!
