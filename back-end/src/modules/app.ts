import express from 'express';
import { MongoClient } from "mongodb";
import {registerRouter} from "./register/register.controller"

const uri = "mongodb+srv://szucsanyisteve456:Ssteve12@cluster0.ur8neot.mongodb.net/";

const client = new MongoClient(uri);

const port = 3000;
const app = express();

app.listen(port, () => {
	console.log(`Application is running on port ${port}.`);
});

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connected to DB");
    } catch (error) {
        console.log("Somethings wrong during connection");
      throw error;
    }
}

export function getClient() {
    return client;
}

app.use('/register', registerRouter);



