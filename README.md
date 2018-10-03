# mihvapp
Proyecto para crear una aplicación web, cuyo objetivo es presentar información profesional de una persona

El proyecto se basara en la infraestructura ofrecida por google en su plataforma firebase, de la cual se usara la parte de Database, Storage, Hosting, Function.

En el desarrollo de la aplicación, se contara con la parte web desarrollada en reactjs, con una api, una desarrollada para subir al componente Functions de firebase, y una api desarrollada en nodejs con express.js, estas dos apis realizaran lo mismo, básicamente la la api echa con express y nodejs es para efectos de realizar las pruebas locales.

La aplicación cliente (web en reactjs), se conectara en el momento a firebase al componente storage para la visualización de imagenes almacenadas.

Para ver la pagina hosteada en firebase sigue este link = [mihvappweb](https://mihv-333.firebaseapp.com)

## Contenido del proyecto

### Carpeta mihvappapi

En esta carpeta contiene el proyecto del servicio rest (api), desarrollada con nodejs y express.js, el objetivo es subir la api a openode, y que sirva para realizar pruebas locales


### Carpeta mihvappapifb

En esta carpeta contiene el proyecto para subir a Functions de firebase, sera la api que consumirá la aplicación cliente cuando este en etapa de producción.


### Carpeta mihvappweb

Esta carpeta contiene el proyecto web, desarrollado con reactjs, esta consumirá el servicio rest desarrollado para obtener los datos que se visualizaran en la pagina.



