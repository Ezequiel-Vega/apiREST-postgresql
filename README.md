# API-REST con TypeScript

Creacion de una apiREST con el lenguaje typescript, en esta api se intento conectar una Base de datos de **Postgresql** con el ORM de **TypeORM**.

## **Instalar los modulos**

Lo primero que se se necesita para iniciar el API-REST es instalar los modulos, esto se logra con el siguiente comando.

`npm install`

## Configurar Token

Para la creacion del token se tiene que configurar la siguiente variable de entorno.

**SECRET_TOKEN**: Esta variable tiene como funcionalidad crear el token encriptado

## Configuracion de base de datos

Para confuigurar la base de datos se tiene que configurar las sguientes variables de entorno.

**HOST_DATABASE**: En esta variable se tiene que definir el host de la base de datos

**NAME_DATABASE**: En esta variable se tiene que definir el nombre de la base de datos

**USER_DATABASE**: En esta variable se tiene que definir el usuario para poder conectarse a la base de datos.

**PASSWORD_DATABASE**: En esta variable se tiene que definir la contraseña para poder conectarse a la base de datos

## **Iniciar la API-REST**

Por ultimo, hay dos formas para iniciar la API-REST, en modo desarollo o en modo produccion.

### Modo desarrollo

`npm run dev`

### Modo produccion

`npm start`
