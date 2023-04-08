import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import connection from './src/database/config.js';
import routerApi from "./src/routes/index.js";
import { createSocketServer } from './src/sockets/socket.js';

const app = express()
const server = http.createServer(app);

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
routerApi(app);
app.use(
    cors({
        exposedHeaders: '*',
        allowedHeaders: '*'
    })
);
//FOR GLOBAL ACCES
Sockets(io);

//USE IN ROUTES
app.locals.io = io;


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
createSocketServer(server);