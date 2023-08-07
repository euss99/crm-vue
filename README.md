# crm-vue - Administrador de Clientes

¡Bienvenido a crm-vue! Esta es una aplicación que te permite administrar clientes de manera eficiente. Con crm-vue, podrás crear nuevos clientes, editar sus datos y eliminar clientes existentes. Durante el desarrollo de esta aplicación, se reforzaron conocimientos en el uso de Vue.js, comunicación con una REST API simulada mediante JSON-Server, vue-router para la gestión de rutas y rutas dinámicas, y se utilizaron herramientas como Axios para las peticiones HTTP, FormKit para la creación de formularios con componentes predefinidos y Tailwind CSS para estilos visuales modernos.

## Componentes

La aplicación utiliza los siguientes componentes:

- **UI/Heading**: El componente `Heading` contiene el encabezado del proyecto. Proporciona una presentación visualmente atractiva en la parte superior de la página.

- **UI/RouterLink**: El componente `RouterLink` se ha utilizado para dar estilos personalizados a los enlaces de rutas de vue-router simulando un botón.

- **TableClientes**: El componente `TableClientes` contiene el encabezado de la tabla que muestra los campos de Nombre, Empresa, Estado y Acciones.

- **Cliente**: El componente `Cliente` representa cada fila de la tabla y muestra la información de cada cliente. Se utiliza un loop `v-for` para renderizar los datos de cada cliente.

## Vistas (Views)

En la carpeta `views`, se encuentran las siguientes vistas:

- **ClientesView**: La vista `ClientesView` es la página inicial que contiene la tabla de listado de clientes. Aquí se visualizan todos los clientes registrados.

- **NuevoClienteView**: La vista `NuevoClienteView` contiene un formulario creado con FormKit para agregar un nuevo cliente. Permite la creación de un cliente con sus respectivos datos.

- **EditarClienteView**: La vista `EditarClienteView` es la página donde se pueden editar los datos de un cliente existente. Utiliza rutas dinámicas para permitir la edición de diferentes clientes en función de su ID.

## JSON-Server - Simulación de REST API

Para simular una REST API y practicar las peticiones a ella, se ha utilizado JSON-Server. Esto permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) en la lista de clientes almacenada en un archivo JSON local. Para activar el servidor JSON-Server y usar la API simulada, ejecuta el siguiente comando en la raíz del proyecto: `json-server --watch db.json --port 4000`.

Esta simulación proporciona una experiencia de desarrollo realista y permite reforzar los conocimientos sobre el uso de REST API con Axios y la comunicación con una API.

## FormKit - Creación de Formularios

Se ha utilizado FormKit, una librería que proporciona componentes predefinidos para formularios, para crear un formulario de creación y edición de clientes. FormKit ha permitido agilizar el desarrollo al proporcionar componentes listos para ser utilizados, incluyendo alertas de validación para asegurar que los campos obligatorios no estén vacíos y que se entreguen los datos correctamente desde los inputs.

## Tailwind CSS - Estilos Modernos

Se ha utilizado Tailwind CSS para estilizar la aplicación y crear una interfaz de usuario moderna y agradable. Tailwind CSS permite una fácil personalización de estilos y proporciona utilidades de clases que facilitan la creación de diseños y componentes visuales.

## Servicios y Composables

Para mantener el código organizado y limpio, se ha creado una carpeta de servicios que contiene funciones para las peticiones a la API. Esto ayuda a separar la lógica de la comunicación con la API del resto del código. Además, se ha creado un archivo `useCliente.js` en la carpeta composable para manejar la lógica relacionada con los clientes. En este composable, se incluye el estado de los clientes y funciones para obtener los clientes al montar la aplicación, actualizar los datos de los clientes y eliminar clientes.

### Verificación de Existencia de Clientes

Dentro del composable `useCliente`, se ha implementado una verificación de existencia de clientes utilizando un computed property. Esto permite mostrar un mensaje o componente especial si no hay clientes registrados en la aplicación.

## Vue-Router y Rutas Dinámicas

Se ha utilizado vue-router para la gestión de rutas en la aplicación. Además, se han implementado rutas dinámicas para permitir la edición de diferentes clientes en función de su ID. Esto permite acceder a la página de edición con una URL personalizada para cada cliente.

## Instalación y Uso

Para utilizar CRM-Vue en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/euss99/crm-vue.git`
2. Navega a la carpeta del proyecto: `cd crm-vue`
3. Instala las dependencias: `npm install`
4. Activa el servidor JSON-Server para la API simulada: `json-server --watch db.json --port 4000`
5. Inicia el servidor de desarrollo: `npm run serve`
6. Abre tu navegador y visita: `http://localhost:5173`

¡Listo! Ahora puedes utilizar crm-vue para administrar tus clientes de forma eficiente y disfrutar de una experiencia de usuario fluida.
