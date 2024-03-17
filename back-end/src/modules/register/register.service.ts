import { getClient } from "../../app.js";

export async function checkUserName(userName:string): Promise<boolean> {
    const client = getClient();

    const db = client.db('szakdoga');
    const users = db.collection('users');

    const contains = await users.findOne({userName: userName});

    return !!contains;
    
}

export async function register(userName: string, password: string) {
    const client = getClient();

    const newUser = {
        userName: userName,
        password: password,
        chip: 1000,
        currentHand: {
            
        }
    }

    const db = client.db('szakdoga');
    const users = db.collection('users');

    const result = await users.insertOne(newUser);
}
