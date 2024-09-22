# Control de Gastos

Este proyecto forma parte del programa [Inmersión Dev](https://www.aluracursos.com/inmersion-dev) desarrollado por [Alura](https://www.aluracursos.com/).

![Control de gastos](./assets/video/sample.gif)

## *Objetivo* :dart:

🔳 Crear una aplicación que nos permita llevar el control de los gastos efectuados durante el mes.


## *Requerimientos* :memo:

🎯 El usuario puede ingresar un monto.

🎯 Incluir un selector para elegir la categoria del gasto.

🎯 Añadir un campo para proporcionar una breve descripción del gasto.

🎯 Añadir botones que permita modificar y eliminar los gastos registrados.


## *Screenshots* :camera:

![Mobile](./assets/screenshot/mobile.avif)

![Mobile](./assets/screenshot/desktop-initial.avif)

![Mobile](./assets/screenshot/desktop-result.avif)


## *Link* :link:

[Live site URL](https://vimpdev.github.io/inmersion-alura-gestor-gastos/) 👀

## *Procedimientos* :footprints:

### *Funciones*
1. **Recuperar datos del formulario**: La función `getDataForm` que maneja la recolección de datos ingresados en el formulario al enviarlo.

1. **Crear y renderizar un ítem**: La función `renderExpensesItems` genera un elemento de gasto y lo inserta en el contenedor HTML correspondiente.

1. **Limpiar el formulario**: La función `resetForm` restablece el formulario a su estado inicial después de agregar o editar un gasto.

1. **Editar el ítem seleccionado**: La función `editExpense` recupera los valores del ítem seleccionado y los inserta en el formulario para su modificación.

1. **Eliminar el ítem seleccionado**: La función `delExpense` elimina el ítem de la lista de gastos, actualizando el total de gastos en consecuencia.

1. **Actualizar y mostrar el total de gastos**: Las funciones `addExpenseTotal`, `updateTotalAfterEdit` y `updateTotalExpenseDisplay` suman los gastos de cada ingreso y los renderiza en el HTML, actualizando el total al editar un ítem.

### *Eventos*

1. **Click**: Eventos para manejar las interacciones con los botones de editar y eliminar gastos.

1. **Submit**: Evento que se activa al enviar el formulario, llamando a la función para recuperar datos.

1. **Reset**: Evento que se activa al limpiar el formulario, reiniciando los valores ingresados.


## *Apendizajes* :nerd_face:

### *Accesibilidad* 🧑‍🦽

+ `aria-live="polite"` - Indica que los cambios en el contenido deben ser anunciados a los usuarios de tecnologías de asistencia de manera ***"educada"***, lo que significa que se anunciarán en un momento que no interrumpa la actividad actual, como en la adición de un nuevo gasto.

+ `aria-required="true"` - Señala que un campo de formulario es obligatorio, ayudando a los usuarios de tecnologías de asistencia a entender que deben completar ese campo antes de enviar el formulario, mejorando así la accesibilidad.

+ `aria-label="..."` - Proporciona una etiqueta accesible para un elemento, permitiendo que los usuarios de tecnología de asistencia comprendan mejor su propósito.

+ `focusable="false"` - Indica que un elemento no puede recibir el foco del teclado, mejorando la navegación y evitando interrupciones el flujo de navegación del usuario.

### *JavaScript*

+ `parseFloat()`: Método que convierte una cadena en un número de punto flotante, asegurando que los valores numéricos se procesen correctamente.
  ```js
  totalExpenses += parseFloat(amount);
  ```

+ `toFixed(dig)`: Método que formatea un número a una cadena, manteniendo un número específico de decimales. Es útil para mostrar montos monetarios adecuadamente.
  ```js
  $amount.textContent = totalExpenses.toFixed(2);
  ```

+ `new FormData(form)`: Constructor que crea un objeto **FormData** que representa los datos de un formulario HTML, facilitando la recolección de datos de manera estructurada.
  ```js
  const formData = new FormData(e.target);
  ```

+ `Object.fromEntries(iter)`: Método que transforma una lista de pares ***clave-valor*** (como la obtenida de un objeto FormData) en un objeto, simplificando la conversión de datos del formulario.
  ```js
  const expenseData = Object.fromEntries(formData);
  ```

+ `unshift(el)`: Método que agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array, utilizado para añadir nuevos gastos al principio de la lista.
  ```js
  expenseArr.unshift(expenseData);
  ```

+ **Desestructuración de objetos**: Permite extraer propiedades de un objeto y asignarlas a variables, simplificando el acceso a valores específicos dentro de un array de objetos.
  ```js
  { category, note, expense } = expenseArr[index];
  ```

+ `currentTarget`: Es una propiedad del objeto de evento en JavaScript que hace referencia al elemento en el que se ha registrado el manejador de eventos. A diferencia de `target`, que puede ser cualquier elemento que haya disparado el evento, `currentTarget` siempre se refiere al elemento que está escuchando el evento. Esto es útil para manejar eventos en elementos que tienen varios niveles de anidamiento.

+ `dataset`: Propiedad de los elementos del DOM que permite acceder a atributos ***data-**** en HTML, facilitando la recuperación de información personalizada almacenada.
  ```js
  const index = e.currentTarget.dataset.index;
  ```


## *Recursos* :card_file_box:

📰 [Alura blog](https://www.aluracursos.com/blog) - Artículos interesantes sobre una variedad de temas.

📺 [Recuperar datos de un FORM](https://www.youtube.com/watch?v=mKQITczHIkc) por Midudev.

📺 [Utilizar DATA-* Atributo correctamente](https://www.youtube.com/watch?v=Kg5UJ_BVlos) por Dorian Desings.
