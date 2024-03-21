import { BSON, WithId } from 'mongodb';
import { getClient } from '../../app';
import passport from 'passport';


export async function authUser(userName: string, password: string, done: Function) {
    const client = getClient();

    console.log("Request login:", userName + " " + password);

    const db = client.db('szakdoga');
    const users = db.collection('users');

    const user = await users.findOne({userName: userName});

    if(user && user.password == password) {
        return done (null, user);
    }else {
        return done (null, false)
    }
    
}

passport.serializeUser((user: any, done: Function) => { 
    console.log(`--------> Serialize User`)
    console.log(user._id)     
  
    done(null, user._id)
} )
  
  
passport.deserializeUser(async (id: any, done: Function) => {
        console.log("---------> Deserialize Id")
        console.log(id)
        const nid = new BSON.ObjectId(id)
        const client = getClient();

        const db = client.db('szakdoga');
        const users = db.collection('users');

        const user = await users.findOne({ _id: nid });
  
        done (null, user);
}) 