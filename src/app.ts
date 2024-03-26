require('./utils/load-env'); // load environment

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes'
import UserModel from './models/userModel';
import { connLocal } from './utils/db';

const app = express();
const port = 4000;

app.use(bodyParser.json());

connLocal.on('connected', function () {
    console.log('Local - mongodb connection established');
});

app.use(router)

app.get('/', async (req, res) => {
    const users = await UserModel.find({})
    console.log({ users })
    res.send(users);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});