import express from 'express'; // Importa el módulo de express

import { SERVER_PORT } from '../global/environment';    // Importa la constante "SERVER_PORT" que contiee el valor del puerto del server

export default class Server {    // El "default" es para indicar que esta clase será la que se exportará por defecto cuando otro archivo la importe
    
    public app: express.Application;    // Propiedad pública que contendrá la aplicación de express
    public port: number;    // Propiedad que contendrá el puerto de nuestro Server

    constructor() {

        this.app = express();    // Almacena la aplicación de express
        this.port = SERVER_PORT;    // Almacena el puerto de nuestro server
    }

    start(callback: Function){
        this.app.listen( this.port, callback());
    }
}