import express from 'express';
import * as registerService from './register.service';

const registerRouter = express.Router();

export { registerRouter };


registerRouter.post('/register', async(req, res) => {
    try {
        const userName = req.body.username;
        const password = req.body.username;

        const userAlredyExcist = await registerService.checkUserName(userName);
        res.status(200).send();
    } catch (error) {
        res.status(500).send();
    }
})