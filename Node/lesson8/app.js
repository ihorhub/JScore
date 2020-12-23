const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'public')));

const { userRouter, authRouter, carRouter } = require('./routes');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/car', carRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(5000, () => {
    console.log('App 5000');
});
