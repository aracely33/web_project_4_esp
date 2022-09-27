# Proyecto 4: Alrededor de los Estados Unidos

### Descripción general

**Alrededor del mundo** es un proyecto donde se despliegan una serie de tarjetas de diferentes partes del mundo, contiene la información de perfil que puede ser editada. Para ello se utilizó el método _query.Selector_ y _textContent_ para poder manipular el contenido en las clases: _profile\_\_info-name_ y _profile\_\_info-occupation_ mediante el uso de una función que se utilizaría como handler en la propiedad .addEventListener, y de esta forma poder asociarlo al botón contenido en la clase _form\_\_save-profile-button_. Se utilizó un proceso similar para abrir la ventana _popup_ con el botón contenido en la clase _profile\_\_info-edit-button_
Se utilizó el diseño responsivo en esta página para dispositivos de resoluciones de 1280px y 320px.
Las imágenes se obtuvieron directamente del archivo en Figma, pero se podría variar el contenido utilizando \_ [Enlace a una variedad de imágenes interesantes](https://unsplash.com).

Actualmente el programa solo es capaz de modificar los datos de perfil del usuario mediante un formulario, los cuales, una vez refrescada la página, no son guardados.Para completar esta parte se pretende agregar más tarde la parte de la conexión con el servidor.
Agregar funcionalidad al botón de like en forma de corazón y al botón con el símbolo "+" para añadir los lugares que se deseen.

### Tecnologías y técnicas

- Figma
- Imágenes
- Css
- JavaScript
- BEM
- GitHub pages

**Figma**

- [Enlace al proyecto en Figma](https://www.figma.com/file/LDMgqWesKpQkIwhOfEBuTS/WEB%2C-Sprint-5%3A-Around-The-U.S.-%7C-desktop-%2B-mobile?node-id=0%3A1)

**Imágenes**

Se recomienda optimizar las imágenes en este enlace optimizarlas [aquí](https://tinypng.com/), para que el proyecto cargue más rápido.

**Css**
Diseño responsivo para 320px y 1280px, se utilizó en su mayoría flexbox y @mediaqueries.
El usuario puede introducir un texto demasiado largo al editar los datos del perfil desde la ventana emergente.Para implementar desbordamientos de bloques con una elipsis insertada al final, utiliza el siguiente conjunto de propiedades CSS:
.item\_\_place-info-name {
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

**JavaScript**

- Manipulaciónde Objetos
- La propiedad classList para la manipulación de clases
- La propiedad classList.remove, classList.add para quitar y agregar clases.
- La propiedad addEventListener(EventName,Handler) para manipular y hacer cambios en la apariencia de la página.
- Uso de funciones.
- Un primer acercamiento al evento _submit_

**GitHub pages**

- [Enlace a la página]()
