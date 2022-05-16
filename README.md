# mihvapp
Proyecto para crear una aplicación web, cuyo objetivo es presentar información profesional de una persona
El proyecto se basará en la infraestructura ofrecida por google en su plataforma firebase, de la cual se usará la parte de Database, Storage, Hosting, Function (Function ya no funciona su parte gratuita de prueba debido a políticas de google).

En el desarrollo de la aplicación, se contará con la parte web desarrollada en reactjs, con una api, una desarrollada para subir al componente Functions de firebase (este componente está pero ya no funciona en producción debido a cambios de google firebase en fuctions), y una api desarrollada en nodejs con express.js, estas dos apis realizaran lo mismo, básicamente la la api echa con express y nodejs es para efectos de realizar las pruebas locales.

La aplicación cliente (web en reactjs), se conectará en el momento a firebase al componente storage para la visualización de imágenes almacenadas.

Para ver la página hosteada en firebase sigue este link = [mihvappweb](https://mihv-333.firebaseapp.com) firebase deploy

## Contenido del proyecto

### Carpeta mihvappapi

En esta carpeta contiene el proyecto del servicio rest (api), desarrollada con nodejs y express.js, el objetivo es subir la api a openode, y que sirva para realizar pruebas locales


### Carpeta mihvappapifb

En esta carpeta contiene el proyecto para subir a Functions de firebase, será la api que consumirá la aplicación cliente cuando pase a la etapa de producción.

NOTA: Actualmente firebase functions no tiene parte de prueba, google modificó el acceso y ahora para usar fucntions se debe contar con un plan blaze.


### Carpeta mihvappweb

Esta carpeta contiene el proyecto web, desarrollado con reactjs, esta consumirá el servicio rest desarrollado para obtener los datos que se visualizarán en la página.

En el 2022 abril se realizó modificación, debido a que google modificó acceso a algunos de los servicios, este proyecto se modificó para que accediera directamente a firebase store y Realtime Database.

Las apis se dejan en el código fuente esperando que de pronto google cambie el acceso a el servicio de functions.

