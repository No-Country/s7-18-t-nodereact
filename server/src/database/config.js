import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

connection().catch((err)=> console.log(err));

async function connection (){
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_ATLAS);
    console.log('Coonectado a Mongo Atlas');
}

export default connection;
