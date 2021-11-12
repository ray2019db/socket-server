import express from 'express'; // Importa el módulo de express
import cors from 'cors';    // Importa el módulo de CORS para que el server permita peticiones desde otros dominos

import Server from "./classes/server";    // Importo la clase "Server" para poder usar todos sus métodos y propiedades en este archivo. Nota que "Server" después del "import Server from './classes/server'" va sin las llaves "{}" y eso es devido a que cuando declaramos la clase "Server" en su archivo la exportamos con "default" de lo caontrario tendríamos que importar la clase asi "import {Server} from './classes/server'"
import { router } from "./routes/router";    // Importa la constante "router" que contiene las rutas de la app

const server = new Server();    // Declara una constante de tipo "Server". Se instancia la clase "Server()", o sea que la "const server" contendrá todos los métodos y propiedades de la clase "Server"

// Middlewares para parsear el body o cuerpo de las peticiones POST, es como el antiguo módulo "body-parser" que se importaba con npm solo que ya express lo tiene incorporado y su función es tomar lo que venga en el cuerpo (body) de una petición http y genera un objeto de Javascript
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

// Middleware para usar el módulo de CORS que permite al servidor responder peticions de otros dominios o por ej; cuando usamos Angular en el puerto 4200 por defecto
server.app.use(cors({origin: true, credentials: true}));

// Middelware que declara las rutas de la aplicación
server.app.use('/', router);

// Inicia el Server para escuchar peticiones
server.start( () => {    // Método "start()" de la clase "Server" que pone a escuchar peticiones a nuestro servidor por el puerto declarado en la propiedad "port"
    console.log(`Server running on port: ${server.port}`);
} )