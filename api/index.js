const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const user = require('./models/user')

mongoose.connect(process.env.MONGO_URL);


const app = express();

app.get('/test', (req, res) => {
    res.send('test ok');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const createdUser = await user.create({ username, password });
    jwt.sign({ userId: createdUser._id },)
})

app.listen(4000)