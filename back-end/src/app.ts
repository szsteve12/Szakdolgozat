import express from 'express';
import passport from 'passport'
import { MongoClient } from "mongodb";
import {registerRouter} from "./modules/register/register.controller"
import { authRouter } from './modules/auth/auth.controller';
const session = require('express-session')

const uri = "mongodb+srv://szucsanyisteve456:Ssteve12@cluster0.ur8neot.mongodb.net/";

const client = new MongoClient(uri);

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))

app.use(passport.initialize()) 
app.use(passport.session());

app.listen(port, () => {
	console.log(`Application is running on port ${port}.`);
});

connectToDatabase();

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

app.use('/', registerRouter);
app.use('/', authRouter);
