const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { MONGO_DB_URI } = require('./configs/config');

require('dotenv').config();

const db = require('./dataBase').getInstance();
const cronRun = require('./cron-jobs/removeExpiredRefreshTokens');

const app = express();

db.setModels();
// eslint-disable-next-line no-use-before-define
_connectDB();
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
    cronRun();
});
// eslint-disable-next-line no-underscore-dangle
function _connectDB() {
    mongoose.connect(encodeURI(MONGO_DB_URI), { useNewUrlParser: true, useUnifiedTopology: true });
    const connect = mongoose.connection;

    connect.on('error', (error) => {
        console.log(error);
    });
}
