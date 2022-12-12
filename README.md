# Proyecto 4: Alrededor de los Estados Unidos

### Descripción general

**Alrededor del mundo** es un proyecto donde se despliegan una serie de tarjetas de diferentes partes del mundo, contiene la información de perfil que puede ser editada y se puede agregar una nueva tarjeta con una imagen, un título, un ícono de borrar y un corazón para dar like.
Utilizando diferentes archivoss para ejecutar tres funciones princiales:

- utils.js contiene los controladores de eventos y la función que abre y cierra las ventanas modales.
- Card.js con el código de la clase Card que puede generar una nueva instancia o carta del lugar.
  Toma los datos de la tarjeta (tanto el texto como un enlace a la imagen _data_) y un selector de elemento de plantilla como parámetros en el constructor.Dispone de métodos privados para trabajar con el marcado y añadir detectores de eventos.Tiene métodos privados para cada controlador de eventos.
  Tiene un método público _enableValidation_ que devuelve un elemento card completamente funcional y lleno de datos.
- FormValidator.js contiene el código de la clase FormValidator la cual se encarga de validar todos los cmpos de los dos formularios en este proyecto.
  El constructor de esta clase tiene dos parámetros. El primer parámetro es un objeto de configuración que almacena los selectores y las clases del formulario, y el segundo toma un elemento del formulario a validar.
  Tiene métodos privados para procesar el formulario, que incluyen: comprobar la validez del campo, cambiar el estado del botón Submit, y agregar todos los controladores necesarios.
  Tiene un método público _enableValidation()_, que activa la validación del formulario.
  El archivo index.js es el punto de reunion de todos estos módulos.Llama mediante _import_ solo a aquellas funciones, clases y variables que se requieren para ejecutar las tareas.

Se utilizó el diseño responsivo en esta página para dispositivos de resoluciones de 1280px y 320px. Las imágenes se obtuvieron directamente del archivo en Figma, pero se podría variar el contenido utilizando \_ [Enlace a una variedad de imágenes interesantes](https://unsplash.com).
Se agregaron al proyecto nuevas funcionalidades:

- Se adicionan dinámicamente con la clase Card seis primeras tarjetas contenidas dentro de un array de objetos.
- El array contiene dos propiedades: title y url.
- Utilizando un formulario con el mismo diseño, el usuario podrá introducir un título para un lugar y una url. Para ello primero dar click en el botón "+" ubicado en el área del perfil. Aparecerá este formulario, introduce los datos que se piden y oprime el botón "crear", se creará una nueva tarjeta con la imagen del url y el nombre que le asignes.
- Diviértete borrando los lugares que no te gusten utilizando el botón "Trash" en la esquina superior derecha del lugar o bien dale like a aquellos sitios que fueron de tu agrado.
- Por último, si quieres ver en grande ese lugar que posiblemente visites las siguientes vacaciones, da click en la imagen y cierra con el botón una vez hayas decidido comprar los boletos.

Ahora es posible validar los datos que el usuario ingresa todo mediante la el uso de la clase exportada FormValidator.Mediante el uso del los mensajes de validación del navegador y JavaScript, se puede ver si los nombres del prefil o del lugar son demasiado cortos o muy largos, o si la url introducida no es una url.

También es posible salir del formulario emergente o de la imagen en grande haciendo click en en "escape" o haciendo un "tap" en la superposición.

Una vez refrescada la página, ningún cambio es guardado.Para completar esta parte se pretende agregar más tarde la parte de la conexión con el servidor.

Se realizó una reestructuración del código, notarás que se adicionaron las clases:

- Popup que, asu vez es la clase padre de PopupWithForms y PopupWith Image. Este conjunto de clases se encargan de las funcionalidades de abrir y cerrar los Popups de todo el proyecto.
  -FormValidator se encarga de validar la información que es ingresada por el usuario.
  -Por otra parte UserInfo tiene la tarea de recopilar esta misma información ingresada y pasarla a la clase Card para que genere una nueva carta o modifique el perfil del usuario.

### Tecnologías y técnicas

- Figma
- Imágenes
- Css
- JavaScript
- JavaScript modular
- BEM
- GitHub pages
- WebPack

**Figma**

- [Enlace al proyecto en Figma](https://www.figma.com/file/LDMgqWesKpQkIwhOfEBuTS/WEB%2C-Sprint-5%3A-Around-The-U.S.-%7C-desktop-%2B-mobile?node-id=0%3A1)

**Imágenes**

Pudes agregar imágenes directamente con un enlace.

**Css**
Diseño responsivo para 320px y 1280px, se utilizó en su mayoría flexbox y @mediaqueries.
El usuario puede introducir un texto demasiado largo al editar los datos del perfil desde la ventana emergente.Para implementar desbordamientos de bloques con una elipsis insertada al final, utiliza el siguiente conjunto de propiedades CSS:
.item\_\_place-info-name {
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;

**JavaScript**

- Manipulaciónde Objetos
- La propiedad classList para la manipulación de clases
- La propiedad classList.remove, classList.add para quitar y agregar clases.
- La propiedad addEventListener(EventName,Handler) para manipular y hacer cambios en la apariencia de la página.
- Uso de funciones.
- Un uso del evento _submit_
- El objeto evt y target.
- Iteración de objetos con forEach
- Creación de atributos
- Validación de formularios
- Uso de clases
- JavaScript modular
- Exportación e importación de constantes, funciones y clases.
- El método público de la clase FormValidator _enableValidation()_ permite activar la validación.
- Cuando se abre la ventana emergente, se añade un detector de eventos que
  permite cerrarla pulsando Esc ; cuando la ventana se cierra, este detector se
  elimina.

- **GitHub pages**

- [Enlace a la página](https://aracely33.gi8thub.io/web_project_4_esp/)
