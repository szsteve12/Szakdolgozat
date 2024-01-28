import { getClient } from '../app';

export async function checkUserName(userName:string) {
    const client = getClient();

    const db = client.db('szakdoga');
    const users = db.collection('users');

    const query = {userName: userName}
    
}