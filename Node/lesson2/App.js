let usersArr = [
    {
        name: "Leanne Graham",
        password: "Bret",
        email: "Sincere@april.biz"
    },
    {
        name: "Ervin Howell",
        password: "Antonette",
        email: "Shanna@melissa.tv"
    },
    {
        name: "Clementine Bauch",
        password: "Samantha",
        email: "Nathan@yesenia.net"
    },
    {
        name: "Patricia Lebsack",
        password: "Karianne",
        email: "Julianne.OConner@kory.org"
    },
    {
        name: "Chelsey Dietrich",
        password: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
    },
    {
        name: "Mrs. Dennis Schulist",
        password: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info"
    },
    {
        name: "Kurtis Weissnat",
        password: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz"
    },
    {
        name: "Nicholas Runolfsdottir V",
        password: "Maxime_Nienow",
        email: "Sherwood@rosamond.me"
    },
    {
        name: "Glenna Reichert",
        password: "Delphine",
        email: "Chaim_McDermott@dana.io"
    },
    {
        name: "Clementina DuBuque",
        password: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz"
    }
];


const express = require('express');
const Hbs = require('express-handlebars');
const app = express();
const path = require('path');
const fs=require('fs');
const pathname=path.join(process.cwd(),'App.js');

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
    const {name,password,email}=req.body;
// як доступитися до userArr? неможу туди записати, і консоль лозі  бачу стрінга вертається, пробував парсити ,
// без результатно..( незнаю всх можливостей і синтакзиз, а методом втику  не варіан..., хотілось би не списувати а самому,
// це все що з лекції розібрав і сам написав,...далі  розумію що маю записати в масив, зробити перевірку...

// fs.readFile(pathname,err => {
//     const find=usersArr.find(value => value.email===email)
//     if (!find){
//         fs.writeFile(pathname,usersArr.push({name,password,email}),err => {
//             console.log(err)
//         })
//     }
    usersArr.push(name,password,email)
    console.log(usersArr)
    res.redirect('/users')
})
app.post('/login', (req, res) => {
    res.redirect('/users')
});
app.listen(5000, () => {
    console.log('App 5000')
});





