# ⚡BUSCADOR DE PERSONAJES DE HARRY POTTER 🧙

## Descripción del proyecto ✍️

El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que
podemos filtrar ya sea por el nombre del personaje o por la casa a la que pertenecen. 

## Listado de personajes 📚

En primer lugar, he realizado una web con el listado de personajes de Harry Potter
utilizando el servicio de https://hp-api.onrender.com/ que nos devuelve información sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece. Sobre cada uno de ellos, he pintado:
- Foto
- Nombre
- Especie

## Imágenes 📷

Algunas de los personajes que devuelve el API no tienen imagen así que he elegido la imagen del sombrero seleccionador para que ese campo no se quede vacío.

## Filtrado de personajes 🤓

Ahora que ya tengo el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
por nombre. Para eso, he añadido un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas. 

## Componentes del listado de personajes 🧹

El listado tiene los siguientes componentes:
- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado.
- Componente para el detalle de cada personaje.

## Detalles de calidad 🪄

Los detalles de calidad de mi página son:
- El campo de texto está recubierto por una etiqueta < form >.
- Si estando en el campo de filtrado la usuaria pulsa intro, se impide que el navegador navegue o
cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto,
se muestra el mensaje "No existen personajes que coincidan con tu búsqueda".
- El filtro busca independientemente de que la usuaria introduzca el texto en mayúsculas o
minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto muestra
el texto que tenía anteriormente.

## Bonus ✌️

Los bonus que he implementado en el proyecto son:
- Usar un sistema de grid para pintar el listado de personajes.
- En el caso de que la usuaria navegue a una URL inexistente,
como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe), mostrar
el mensaje "El personaje que buscas no existe".
- Hacer que la URL del detalle de personaje sea compatible, es decir, si
visitamos esa URL directamente en el navegador se ve el detalle del personaje. Si refescamos el
navegador en el detalle de un personaje (o cerrando y abriendo en la misma dirección) también se
vuelve a mostrar el detalle de ese personaje.
- Mostrar el listado de personajes ordenado alfabéticamente por nombre.
- Crear un boton de reset para que la página vuelva a su listado principal
 

