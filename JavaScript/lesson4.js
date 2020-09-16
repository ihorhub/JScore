// 1  - створити функцію яка виводить масив


// let arr = [];
// function fillArray() {
//     arr = [1, 2, 3];
// }
// fillArray();
// console.log(arr);


//  2 - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію
// function array(length, min, max) {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         const arrElement = arr[i];
//         arr.push(Math.floor(Math.random() * (max - min) + min))
//
//     }
//     console.log(arr)
// }
//
// array(7, 2, 15)


//   3 - створити функцію яка приймає три числа та виводить та повертає найменьше.


// function number (a,b,c) {
//     console.log(Math.min(a,b,c))
//         return Math.min(a, b, c)
// }
// number (5,15,88)


//  4 - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function numbes(a, b, c) {
//     console.log(Math.max(a, b, c))
//     return Math.max(a, b, c)
//
// }
//
// numbes(-5, 15, 58)




//  5 -- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function number(ar) {
//
//      console.log(Math.max(ar))
//      return Math.min(ar)
//     }
// number (2,6,5,8,9,25,749)


// 6-- створити функцію яка виводить масив
// let arr = [];
// function fillArray() {
//     arr = [1, 2, 3];
// }
// fillArray();
// console.log(arr);


  //  7 -  створити функцію яка повертає найбільше число з масиву

// function fillArray(ar) {
//     console.log(Math.max.apply(null, ar))
// }
//
// fillArray([1, 5, 8, 86, 7,]);


//  8  -створити функцію яка повертає найменьше число з масиву

// function fillArray(ar) {
//     console.log(Math.min.apply(null, ar))
// }
//
// fillArray([1, 5, 8, 86, 7,]);

//  9--створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function numbers() {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum+=argument
//     }
//     console.log(sum)
// return sum;
// }
//  numbers(5,5,5)


// 10 -створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function numbersSum() {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum=sum+argument/arguments.length
//     }
//     console.log(sum)
//     return sum;
// }
// numbersSum(10,10,10)




//  ???? !!!  11 - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

//
// function  user(arr) {
//     let count = 0
//     for (const argument of arr) {
//         if (typeof argument==='object'){
//             count++
//         }
//
//     }
//     console.log(count);
//     return count
// }
//
// user([{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}])


// function findArrayLength(arr) {
//     let x = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] == 'object') {
//             x += 1;
//         }
//     }
//     console.log(x);
//     return x;
// }
// findArrayLength([{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}])
// function findArrayLength(arr) {
//     let x = 0;
//     for(let i = 0; i < arr.length; i++) {
//         x += 1;
//     }
//     console.log(x);
//     return x;
// }
// findArrayLength([133,'sddsa','546'])



// 12 -Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function user(arr) {
//
//     let x=0
//     for (const argument of arr) {
//         for (const argumentsKey in arguments) {
//            x++
//         }
//
//     }
//     console.log(x)
//
// }
//
// user([{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//      {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}])
//
//
//

//   13- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив
//
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]
//
// function sumArr(array1, array2) {
//    let result = []
//     for (let i = 0; i < array1.length; i++) {
//        result.push(array1[i] + array2[i]);
//    }
//
//     return result
// }
//
// console.log(sumArr(arr1, arr2))




//   14  приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//


// function array(arr, i) {
//     let newArr = arr[i]
//
//
//     arr[i] = arr[i + 1]
//     arr[i + 1] = newArr
//     console.log(arr)
// }
//
//
// array([1, 55, 66, 9, 4, 0, 44], 3)
//  15-створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//
//[1,0,6,0,3] => [1,6,3,0,0]
  //  [0,1,2,3,4] => [1,2,3,4,0]

// function filterZero(array) {
//     let number = []
//     let zero = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             zero.push(array[i])
//         } else {
//             number.push(array[i])
//         }
//
//     }
//     return number.concat(zero)
//
// }
//
// console.log(filterZero([1, 0, 6,0,55, 0, 3]))
// console.log(filterZero([0, 1, 2,64,0,2563,0, 3, 4]))


// --Створити функцію яка :
//
// 16  - Додає в боді блок з текстом "Hello owu"

// function addDiv() {
//     let div = document.createElement('div')
//     div.innerText = 'Hello owu'
//     document.body.appendChild(div)
//
// }
// addDiv()

//
//  17 - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addDiv(massege, typeTag) {
//     let tag = document.createElement(typeTag)
//     tag.innerText = massege
//     document.body.appendChild(tag)
//
// }
//
// addDiv('Hellow owu', 'h1')
//
//  18 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


    //Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
// let cars = [
//     {id:1,name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black',driver:{name:'Vasya',age:35,sex:'male',experience:15}},
//     {id:2,name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze',driver:{name:'P1etya',age:30,sex:'male',experience:10}},
//     {id:3,name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white',driver:{name:'Lesya',age:31,sex:'female',experience:12}},
//     {id:4,name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green',driver:{name:'Lena',age:29,sex:'female',experience:9}},
//     {id:5,name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver',driver:{name:'Vitya',age:40,sex:'male',experience:25}},
//     {id:6,name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black',driver:{name:'Kokos',age:55,sex:'male',experience:35}},
//     {id:7,name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red',driver:{name:'Gora',age:43,sex:'male',experience:17}},
//     {id:8,name: 'Lada', model: '2110', age: '2015', powerKw: 58, color: 'crimson',driver:{name:'lyolik',age:22,sex:'male',experience:4}},
//     {id:9,name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color: 'blue',driver:{name:'Bolik',age:27,sex:'male',experience:7}},
//     {id:10,name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow',driver:{name:'Nina',age:29,sex:'female',experience:15}}
//
// ]

// function carsArray(array, id) {
//     const ul = document.createElement("ul")
//     for (let i = 0; i < array.length; i++) {
//         const carEl = array[i];
//         const li = document.createElement("li")
//         li.innerText = `${carEl.id}, ${carEl.name}, ${carEl.model}, ${carEl.age}, ${carEl.powerKw}, ${carEl.color}`
//         ul.appendChild(li)
//     }
//
//     document.body.appendChild(ul)
// }
//
// carsArray(cars, 'list')
//

//  19- Для кожної властивості створити всередені блока автомоблія свій блок
// function carsArray(array, id) {
//     const block = document.getElementById('container')
//     const name = document.createElement("div")
//     for (let i = 0; i < array.length; i++) {
//         const carEl = array[i];
//         const div = document.createElement("div")
//
//         div.innerText = `${carEl.id}-- ${carEl.name}`
//
//         const h3 = document.createElement("h3")
//         h3.innerText = `${carEl.model}- ${carEl.age}- ${carEl.powerKw}- ${carEl.color}`
//         div.appendChild(h3)
//         name.appendChild(div)
//     }
//     block.appendChild(name)
//
//     document.body.appendChild(block)
//
// }
//
// carsArray(cars, 'list')


//
//
//


//      function carsArray(array, id) {
//     const block = document.getElementById(id)
//     const name = document.createElement("div")
//     for (let i = 0; i < array.length; i++) {
//         const carEl = array[i];
//         const div = document.createElement("div")
//
//         div.innerText = `${carEl.id} ${carEl.name}`
//
//         const h3 = document.createElement("h3")
//         const h4=document.createElement('h4')
//         const h5=document.createElement('h5')
//         const p=document.createElement('p')
//
//         h3.innerText = `${carEl.model}`
//         h4.innerText=`${carEl.age}`
//         h5.innerText=`${carEl.powerKw}`
//         p.innerText=` ${carEl.color}`
//         div.appendChild(h3)
//         div.appendChild(h4)
//         div.appendChild(h5)
//         div.appendChild(p)
//         name.appendChild(div)
//     }
//     block.appendChild(name)
//
//     document.body.appendChild(block)
//
// }
//
// carsArray(cars, 'list')


//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//
// та повертає масив цих з'єднаних об'єктів.
//
// Приклад масивів:

            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
            // {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            //
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
            // {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false
//     },];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {
//         user_id: 4,
//         country: 'USA',
//         city: 'Miami'
//     },];
// function usersWithCities(arr1,arr2) {
//     let usersCities = []
//     for (const user of arr1){
//         for (const city of arr2) {
//             if (user.id === city.user_id){
//                 usersCities.push({...user, ...city})
//             }
//
//         }
//     }
//     console.log(usersCities)
//     return usersCities
// }
//
//    usersWithCities(usersWithId,citiesWithId)


//***- беремо завдання з правилами з укроку №3 :
//
// Та робимо це функцією.При цьому правила отримувати через аргумент.
//
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//

// 			let rules = [
//
// 				{
//
// 					title: 'Первое правило Бойцовского клуба.',
//
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
//
// 				},
//
// 				{
//
// 					title: 'Второе правило Бойцовского клуба.',
//
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//
// 				},
//
// 				{
//
// 					title: 'Третье правило Бойцовского клуба.',
//
// 					body: 'В схватке участвуют только двое.'
//
// 				},
//
// 				{
//
// 					title: 'Четвертое правило Бойцовского клуба.',
//
// 					body: 'Не более одного поединка за один раз.'
//
// 				},
//
// 				{
//
// 					title: 'Пятое правило Бойцовского клуба.',
//
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
//
// 				},
//
// 				{
//
// 					title: 'Шестое правило Бойцовского клуба.',
//
// 					body: 'Поединок продолжается столько, сколько потребуется.'
//
// 				},
//
// 				{
//
// 					title: 'Седьмое правило Бойцовского клуба.',
//
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//
// 				},
//
// 				{
//
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
//
// 					body: 'Новичок обязан принять бой.'
//
// 				},
//
//
//
// 			];
// function wraprules(arr) {
//
//
//     const wrap = document.createElement('div')
//     wrap.id = 'wrap'
//     for (let i = 0; i < arr.length; i++) {
//         const rule = arr[i]
//         const div = document.createElement("div")
//         const h2 = document.createElement('h2')
//         const p = document.createElement('p')
//         div.className = `rule${i + 1}`
//         h2.innerText = rule.title
//         p.innerText = rule.body
//         div.appendChild(h2)
//         div.appendChild(p)
//         wrap.appendChild(div)
//     }
//
//     document.body.appendChild(wrap)
// }
// wraprules(rules)


//===========додаткове від віктора========
//
// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!




// function rec(n) {
//     const  res = n/2
//     if (res>1){
//         return rec(n/2)
//     }
// if ( res<1){
//     return  'NO'
// }
// return  'YES'
// }
// console.log(rec(5))
// //  ХЗ


   // 2) Deep Copy реалізувати глибоке копіювання обєкту за допомогою рекурсій
// function deepCopy(copy) {
//
//     deepCopy()    // робим виклик функції в самій функції

// }

//
// 3) Flat Вирівняти багаторівневий масив в однорівневий
  //  [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]


//
// let ar1= [1,3, ['Hello, 'world', [9,6,1]], ['oops'], 9];
// let ar2= ar1.join('')
// console.log(ar2)