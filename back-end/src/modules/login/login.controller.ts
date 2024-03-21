import express from 'express';
import * as loginService from './login.service';

const loginRouter = express.Router();

export { loginRouter };

loginRouter.get('/login', async (req, res, next) => {
    try {
        console.log("Request login:", req.body);
        res.render('login');
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).send();
    }
})