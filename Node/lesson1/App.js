

const fs=require('fs');
const path= require('path');


// fs.mkdir(path.join(process.cwd(),'www'),err => {
//     console.log(err)
// })
// fs.rmdir(path.join(process.cwd(),'www'),err => {
//     console.log(err)
// })


 const filename=fs.mkdir(path.join(__dirname,'20.00'),{recursive:true},err => {
     console.log(err)
 });
const  filename2= fs.mkdir(path.join(process.cwd(),'18.00'),err => {
    console.log(err)
});

const pathname1=path.join(process.cwd(),'20.00','Ivan.txt');
const pathname2=path.join(process.cwd(),'20.00','Olga.txt');
const pathname3=path.join(process.cwd(),'18.00','Dima.txt');
const pathname4=path.join(process.cwd(),'18.00','Ira.txt');


// const pathname11=fs.appendFile(pathname1,`my name Ivan  age 30 `,err => {
//     console.log(err)
// })

const  writename1=fs.writeFile(pathname1,`my name: Ivan \n age: 35`,err => {
    console.log(err)
});
const  writename2=fs.writeFile(pathname2,`my name: Olga \n age :25`,err => {
    console.log(err)
});
const  writename3=fs.writeFile(pathname3,`my name: Dima \n age :32`,err => {
    console.log(err)
});
const  writename4=fs.writeFile(pathname4,`my name: Ira \n age:22`,err => {
    console.log(err)
});

const pathnew1=path.join(process.cwd(),'18.00','Ivan.txt')
const pathnew2=path.join(process.cwd(),'18.00','Olga.txt')
const pathnew3=path.join(process.cwd(),'20.00','Dima.txt')
const pathnew4=path.join(process.cwd(),'20.00','Ira.txt')

let renema1=fs.rename(pathname1,pathnew1,err => {console.log(err)})
let renema2=fs.rename(pathname2,pathnew2,err => {console.log(err)})
let renema3=fs.rename(pathname3,pathnew3,err => {console.log(err)})
let renema4=fs.rename(pathname4,pathnew4,err => {console.log(err)})
