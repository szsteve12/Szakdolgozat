import express from 'express';
import * as registerService from './register.service';

const registerRouter = express.Router();

export { registerRouter };

registerRouter.post('/register', async (req, res) => {
    try {
        console.log("Request received:", req.body);
        const userName = req.body.username;
        const password = req.body.password;

        const userAlredyExcist = await registerService.checkUserName(userName);

        if(userAlredyExcist) {
            const response = { message: "This username already exists." };
            res.status(400).json(response);
        }else {
            const response = await registerService.register(userName, password);
            res.status(200).send();
        }
    } catch (error) {
        console.error('Error in route handler:', error);
        res.status(500).send();
    }
})