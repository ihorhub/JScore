const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { userRouter, authRouter } = require('./routes');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(5000, () => {
    console.log('App 5000');
});
