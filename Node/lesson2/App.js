

const express = require('express');
const Hbs = require('express-handlebars');
const app = express();
const path = require('path');
const fs=require('fs');
let usersArr=require('users')
const pathname=path.join(process.cwd(),'users.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', Hbs({defaultLayout: false}));
app.set('views', path.join(process.cwd(), 'views'));

// let isLog = false
app.get('/users', (req, res) => {
    res.render('users', {isLog:true,users: usersArr})
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
    const {name:name,password:password,email:email}=req.body;
// як доступитися до userArr? неможу туди записати (ми на минулій лекції записували у файл, а тут зразу головний App
// без результатно..( незнаю всх можливостей і синтакзиз, а методом втику  не варіан..., хотілось би навчитись і самому зробити  а не  списувати,...
// це все що з лекції розібрав і сам написав,...далі  розумію що маю записати в масив, зробити перевірку...

fs.readFile(pathname,((err, data) => {
    if (err) { res.redirect('/error')}
     usersArr = JSON.parse(data);
    let find=usersArr.find(value => value.email===email);


    if (!find){
        usersArr.push({name,password,email})
    }
        fs.writeFile(pathname,err => {
            console.log(err)
        })


    res.redirect('/users')
})
app.post('/login', (req, res) => {
    res.redirect('/users')
});
app.listen(5000, () => {
    console.log('App 5000')
});





