const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_ATLAS

mongoose.set('strictQuery', false);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Conectado a Mongo correctamente!', uri);
})