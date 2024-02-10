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
    successRedirect: '/',
    failureRedirect: '/login'
}));
