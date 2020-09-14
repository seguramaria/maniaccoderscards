<img src="https://raw.githubusercontent.com/seguramaria/maniaccoderscards/master/src/images/6.png" width="150"/>

# Maniac Coders Awesome Profiles Cards

## Aplicación web interactiva con JavaScript Vanilla

En este proyecto colaborativo hemos realizado una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. Se puede usar para crear vuestras propias tarjetas de visita profesionales.

### Especificaciones

### En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

- Uso avanzado de formularios HTML
- Maquetación usando CSS avanzado, como flex y grid
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first
- Gestión de eventos en el navegador (al hacer click, pasa x, etc.)
- Acceso y envío de datos a un servidor
- Almacenamiento en local usando LocalStorage
- Uso de git para el control de versiones del proyecto
- Publicación del resultado en Internet usando GitHub Pages

### El proyecto consta de 2 páginas:

Una página landing de bienvenida y una página con la aplicación de crear tarjetas

### La aplicación funciona siguiendo estos pasos:

- Permitir al usuario elegir el estilo de la tarjeta, eligiendo paleta de colores

- Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que muestra del resultado final
- Permitir que el usuario pueda crear una web con su tarjeta y compartirla por Twitter

### La tarjeta de visita tiene los siguientes campos (entre paréntesis el nombre del campo usado):

- Nombre completo (full_name)
- Profesión (desarrolladora front-end ;) (job)
- Datos personales
- Teléfono (phone)
- Correo electrónico (email)
- RRSS
- LinkedIn (linkedin)
- GitHub (github)

### Respecto a la interacción con la web:

- Los campos tienen restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta
- Las 3 partes del proceso de creación son elementos colapsables, que al hacer clic en el título se muestra/oculta solo mostrando una sección a la vez
- Toda la información del formulario se almacena en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página sigue disponible y podemos borrarla con un botón de Reset. Para esto, definimos una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador

### Para compartir en Twitter seguiremos 2 pasos:

- Al hacer clic en el botón de "Enviar" enviamos el formulario (submit) a un API que devuelve la URL de una web con la tarjeta de visita con la información rellena
- Mostramos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlaza a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta

Enlace a GitHub Pages para ver el resultado de la página: http://beta.adalab.es/project-promo-j-module-3-team-2/#/
