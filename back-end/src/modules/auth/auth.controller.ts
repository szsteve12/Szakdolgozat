import express from 'express';
import { getClient } from '../../app';
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
import { authUser } from './auth.service';

const authRouter = express.Router();

export { authRouter };

passport.use(new LocalStrategy (authUser))

authRouter.post('/login/password', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/login'
}));

authRouter.get('/login', async (req, res, next) => {
    try {
        res.send('Please login');
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).send();
    }
})

authRouter.get('/success', async (req, res, next) => {
    try {
        const message = "You are successfully logged in!";

        res.send(JSON.stringify(message));
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).send();
    }
})