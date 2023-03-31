import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import connection from './src/database/config.js';
import routerApi from "./src/routes/index.js";
const app = express()

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

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});