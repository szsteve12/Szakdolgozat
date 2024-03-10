import { getClient } from "../../app.js";

const deck = createDeck();

export function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    
    let deck = [];
    
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp: any = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    return deck;
    
}

export function createGameSession() {
    const client = getClient();
    const db = client.db('szakdoga');
    const users = db.collection('session');

    const  gameSession = {
        userIDs:{

        },
        rounds: 0,
        playerTrack: '',
        started: false,

    }
}

export function deal(deck: any) {
    
}



