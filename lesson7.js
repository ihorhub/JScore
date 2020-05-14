
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// document.getElementById('hider').onclick = function () {
//     if (document.getElementById('text').hidden === true) {
//         document.getElementById('text').hidden = false
//     } else {
//         document.getElementById('text').hidden =
//             true
//     }
// }
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// document.getElementById('hider').onclick = function () {
//     this.style.display = 'none'
// }

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//<input id="number" type="number" value=" введіть тут скільки вам років ">
// let age = document.form1.age
// let submit = document.form1.button
// submit.onclick = function () {
//     if (age.value > 18) {
//         alert('Вхід дозволено')
//     } else {
//         alert('STOP!!!' +
//             ' Неповнолітнім вхід заборонений!!!')
//
//     }
//
// }


//Создайте меню, которое раскрывается/сворачивается при клике
// let a1 = document.getElementById('a1')
// let submenu = document.getElementById('submenu')
// a1.onclick = ev => {
//     if (submenu.style.display == 'block') {
//         submenu.style.display = 'none'
//     } else {
//         submenu.style.display = 'block'
//     }
// }

//оздать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


// let commentArray = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'} // якщо додаю обєкти то перестає робити, хоч у відео з ДЗ все працює
//
// ]
//
// const content = document.getElementById("content1")
//
// commentArray.forEach(value => {
//     const div = document.createElement('div')
//     const h2 = document.createElement('h2')
//     const p = document.createElement('p')
//     const button = document.createElement('button')
//     button.innerText = 'Hide'
//     h2.innerText = value.title
//     p.innerText = value.body
//     button.onclick = (ev) => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//     div.appendChild(h2)
//     div.appendChild(p)
//     div.appendChild(button)
//     content.appendChild(div)
//
// })


//створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
//
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.getElementById('btn')
// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let input11 = document.getElementById('input11')
// let input22 = document.getElementById('input22')
// btn.onclick = ev => {
//     console.log(input1.value)
//     console.log(input2.value)
//     console.log(input11.value)
//     console.log(input22.value)
// }

//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let content = document.getElementById('content2')
//
// function CreateTable(rows, cols, tag) {
//     let table = document.createElement('table')
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td')
//             td.innerHTML = i + j                  // td.innerHTML=i.toString()+j.toString() //так робили з відео ДЗ
//
//             tr.appendChild(td)
//         }
//
//         table.appendChild(tr)
//     }
//     tag.appendChild(table)
// }
//
// CreateTable(6, 8, content) // ще не зовсім розумію ,як нумерація відбувається

//Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     {id: 1, img_url: 'https://www.dilovamova.com/images/wpi.images/events/70612d.jpg'},
//     {id: 2, img_url: 'https://imagecdn4.luxnet.ua/radio24/uploads/640w_DIR/media_news/2018/10/8352b3047e286414c57306cf99263c73da4c7a6a.jpg' },
//     {id: 3, img_url: 'https://static.espreso.tv/uploads/article/2537649/images/im610x343-emoji1.jpg'},
//     {id: 4, img_url: 'https://static.ukrinform.com/photos/2018_07/1531819160-9092.jpg'}
// ]
// let content = document.getElementById('content3')
// let img = document.createElement('img')
// let btn1 = document.createElement('button')
// let btn2 = document.createElement('button')
// btn1.innerText = ' Left '
// btn2.innerText = ' Right '
// let index = 0
// img.width = 400
// img.height=350
// img.src = imgArray[index].img_url
// content.appendChild(img)
// content.appendChild(btn1)
// content.appendChild(btn2)
// btn1.onclick = () => {
//     index - 1 < 0
//         ? index = imgArray.length - 1
//         : index = index - 1
//     img.src = imgArray[index].img_url
// }
// btn2.onclick = () => {
//     index + 1<= 1
//         ? index = imgArray.length - 1
//         : index = index -1
//     img.src = imgArray[index].img_url
// }

//Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//сто копанок чортів тобі в печінку', /// не робить, доступався рызними способами (форм4,нейм тд


//
//
// let badWord=['під три чорти',
//     'бодай тебе чорти вхопили',
//     'Ти, гімно нероздушене!',
//     'ах ти свиняче рило!',
//     'дідька лисого',
//     'дідько б його взяв (вхопив)',
//     'де його чорти понесли?  ']
//
// let btn = document.getElementById('btn4')
//
// btn.onclick = () => {
//     let wasBAdWord = false
//
//     let content = document.getElementById('input4').value
//
//     for (const string of badWord) {
//         if (content === string) {
//             wasBAdWord = true
//         }
//
//     }
//     wasBAdWord
//         ? alert('STOP!!! зупини лайку')
//         : alert('continue writing')
// }


//создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//  При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let arrayH2 = document.getElementsByTagName('h2')
// let content = document.getElementById('content5')
// let wrap = document.getElementById('wrap')
// let ul = document.createElement('ul')
// for (let i = 0; i < arrayH2.length; i++) {
//     let li = document.createElement('li')
//     let a = document.createElement('a')
//     a.href = '#' + i
//     arrayH2[i].setAttribute('id', [i])
//     a.innerHTML = arrayH2[i].innerText
//     li.appendChild(a)
//     ul.appendChild(li)
// }
// content.appendChild(ul)
// content.style.width = '30%'
// content.style.float = 'left'
// wrap.style.width = '60%'
// wrap.style.float = 'left'


//зять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//
//             ];
// let content=document.getElementById('content6')
// let userDiv=document.createElement('div')
// userDiv.appendChild(renderContent(usersWithAddress))
// userDiv.className='user'
//
// let input1=document.createElement('input')
// let input2=document.createElement('input')
// let input3=document.createElement('input')
// let label1=document.createElement('label')
// let label2=document.createElement('label')
// let label3=document.createElement('label')
// let button=document.createElement('button')
// label1.innerText='со статусом false'
// label2.innerText='старше 29 лет включительно'
// label3.innerText=' у кого город киев'
// button.innerText='Filter ON'
// input1.type='checkbox'
// input2.type='checkbox'
// input3.type='checkbox'
// content.appendChild(userDiv)
// content.appendChild(label1)
// content.appendChild(label2)
// content.appendChild(label3)
// content.appendChild(input1)
// content.appendChild(input2)
// content.appendChild(input3)
// content.appendChild(button)
// button.onclick=ev => {
//     let myArray=JSON.parse(JSON.stringify(usersWithAddress))
//     if(input1.checked)myArray=myArray.filter(value => !value.status)
//     if(input2.checked)myArray=myArray.filter(value => value.age>=29)
//     if(input3.checked)myArray=myArray.filter(value => value.city==="Kyiv")
//     userDiv.innerText=''
//     userDiv.appendChild(renderContent(myArray))
// }
//
// function renderContent (array) {
// let main=document.createElement('div')
//     array.forEach(item=>{
//         let  div=document.createElement('div')
//         div.innerText=JSON.stringify(item)
//         main.appendChild(div)
//     })
//     return main
// }
