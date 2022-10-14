# Proyecto 4: Alrededor de los Estados Unidos

### Descripción general

**Alrededor del mundo** es un proyecto donde se despliegan una serie de tarjetas de diferentes partes del mundo, contiene la información de perfil que puede ser editada. Para ello se utilizó el método _query.Selector_ y _textContent_ para poder manipular el contenido en las clases: _profile\_\_info-name_ y _profile\_\_info-occupation_ mediante el uso de una función que se utilizaría como handler en la propiedad .addEventListener, y de esta forma poder asociarlo al botón contenido en la clase _form\_\_save-profile-button_. Se utilizó un proceso similar para abrir la ventana _popup_ con el botón contenido en la clase _profile\_\_info-edit-button_
Se utilizó el diseño responsivo en esta página para dispositivos de resoluciones de 1280px y 320px.
Las imágenes se obtuvieron directamente del archivo en Figma, pero se podría variar el contenido utilizando \_ [Enlace a una variedad de imágenes interesantes](https://unsplash.com).
Se agregaron al proyecto nuevas funcionalidades:

- Se adicionan automáticamente seis primeras tarjetas contenidas dentro de un array de objetos.
  -El array contiene dos propiedades: title y url.
  -Utilizando un formulario con el mismo diseño, el usuario podrá introducir un título para un lugar y una url. Para ello primero dar click en el botón "+" ubicado en el área del perfil. Aparecerá este formulario, introduce los datos que se piden y oprime el botón "crear", se creará una nueva tarjeta con la imagen del url y el nombre que le asignes.
  -Diviértete borrando los lugares que no te gusten utilizando el botón "Trash" en la esquina superior derecha del lugar o bien dale like a aquellos sitios que fueron de tu agrado.
  -Por último, si quieres ver en grande ese lugar que posiblemente visites las siguientes vacaciones, da click en la imagen y cierra con el botón una vez hayas decidido comprar los boletos.

Una vez refrescada la página, ningún cambio es guardado.Para completar esta parte se pretende agregar más tarde la parte de la conexión con el servidor.

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

Pudes agregar imágenes directamente con un enlace.

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
- El objeto evt y target.
- Iteración de objetos con forEach
- Creación de atributos
- **GitHub pages**

- [Enlace a la página](https://aracely33.github.io/web_project_4_esp/)
