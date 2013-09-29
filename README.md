Taiapp
======

Descripción
-----------
Este es trabajo que hicimos @aitor_rl y yo @patxangas en el hackathón (apps4helath)[http://apps4health.es] y que como no podíamos mostrarlo como nos gustaba, no lo presentamos pero el código esta para el que se sirva. 
La idea era la simpleza. Una app destinada al circulo de confianza que conforman las personas que trabajan en la frontera entra Camboya y Tailandia, para la emisión de alertas. LA trata de seres humanos es uno de los problemas y muchas personas que buscan una mejor lejos de encontrarla acaban en manos de explotadores sexuales o laborales. Con el sistema de alerta lo que queríamos es que las personas que trabajan en estas zonas puedan marcar un lugar en conflicto, la alerta se geoposiociona y luego en un mapa se visualizan estos datos. 

En el hackathon avanzamos bastante, pero quedan los detalles 

Elementos de la app
-------------------
* Proyecto en phongap muy básico y siguiendo sus patrón modulo, con los plugins network y geolocation
* Node/Express que se encarga de recoger las peticiones de la app móvil mediante una llamadas jsonp, y mostrarla en un mapa mediante mapboxjs
* usamos firebase para la persistencia de datos


Tiempo real
-----------
Al usar (firebase)[http://firebase.com] que es una caña de proyecto al entrada de las alertas se ven en tiempo en "tiempo real" y parte del reto era usar este proyecto

TODO
====

Pues todo XD