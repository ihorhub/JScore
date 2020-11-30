const express = require('express');
const Hbs = require('express-handlebars');
const app = express();
const path = require('path');
const fs = require('fs');
const pathnamearr = path.join(process.cwd(), 'users.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', Hbs({defaultLayout: false}));
app.set('views', path.join(process.cwd(), 'views'));

let isLog = false

app.get('/users', (req, res) => {
    fs.readFile(pathnamearr, (err, data) => {
        if (!isLog) {
            res.render('err');
            return
        }
        const userList = JSON.parse(data.toString());
        res.render('users', {users: userList})
    })
});

app.get('/error', (req, res) => {
    res.render('err')
});

app.get('/main', (req, res) => {
    res.render('main')
});

app.get('/registration', (req, res) => {
    res.render('registration')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/registration', (req, res) => {
    const {name, password, email} = req.body;
    fs.readFile(pathnamearr, ((err, data) => {
        if (err) {
            res.render('err')
        }
        const userList = JSON.parse(data.toString());
        const find = userList.find((user) => user.email === email)
        if (find) {
            res.redirect('/error')
            return;
        }
        userList.push(req.body);
        fs.writeFile(pathnamearr, JSON.stringify(userList), (err1) => {
            if (err1) {
                res.render('err')
            }
        });
        isLog = true;
        res.redirect('/users');
    }))
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    fs.readFile(pathnamearr, (err, data) => {
        if (err) {
            res.render('err')
        }
        const userList = JSON.parse(data.toString());
        const find1 = userList.find((user) => user.email === email);
        if (!find1) {
            res.render('err');
            return;
        }
        res.redirect('/users')
        isLog = true;
    });
});

app.listen(5000, () => {
    console.log('App 5000')
})





