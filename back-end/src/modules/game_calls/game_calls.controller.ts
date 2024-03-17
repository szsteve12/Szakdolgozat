import express from 'express';
import * as gameCallsService from './game_calls.service';

const gameCallsRouter = express.Router();

export { gameCallsRouter };

gameCallsRouter.get('/call', async (req, res, next) => {
    try {
        console.log("Request login:", req.body);
        res.render('login');
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).send();
    }
})