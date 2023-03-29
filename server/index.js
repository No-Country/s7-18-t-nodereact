const express = require('express');
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const cors = require('cors');
require('./src/database/config.js');
const routerApi = require("./routes");

const app = express()

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