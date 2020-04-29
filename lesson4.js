//- створити функцію яка виводить масив
// function arry1(array) {
//     console.log(array)
// }
// arry1([1,2,3,5,8])

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію
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

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function numbes(a, b, c) {
//     console.log(Math.min(a, b, c))
//     return Math.min(a, b, c)
//
// }
//
// numbes(5, 15, 58)

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function numbes(a, b, c) {
//     console.log(Math.max(a, b, c))
//     return Math.max(a, b, c)
//
// }
//
// numbes(-5, 15, 58)
//// /*
//   1) Ти повинен передати будь яку кількість чисел, а не масив
//   2) const arrElement не у зоні видимості для console.log та return
//   3) що таке arr у 52 стрічці (тобто тут numbes(arr))
//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function numbes(arr) {                        //це було в ДЗ і паралельно дивився приклади в гуглі.
//
//      console.log(Math.max(arr))
//      return Math.min(arr)
//     }
// numbes(1,2,6,5,8,9,25,749)

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.   // це було в ДЗ і паралельно дивився приклади в гуглі.
// function averageСost(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//        sum = (sum + arr[i]) / arr.length;
//     }
//
//     return sum;
// }
//  averageСost(2,2,2,2,2)

// function averageСost(arr){
//     return arr.reduce((previousValue, currentValue)=>previousValue+currentValue)/arr.length
// }
//  averageСost(2,5,8,55,9)

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function user(arr) {
//     let count = 0
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'object')
//             count++
//     }
//     return count
// }

// Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function user(arr) {
//     let count = 0
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'object') {
//             for (const arrElementKey in arrElement) {
//
//             }
//             count++
//         }
//     }
//     return count
// }

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив
// ПРАЦЮЄ!!
// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]
//
// function sumArr(array1, array2) {
//     let result = []
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }
//
//     return result
// }
//
// console.log(sumArr(arr1, arr2))



//приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//                       і відео по дз по цьому тоже не зрозуміле!!!!

// TODO: у тебе є масив [3, 2, 1, 8, 5, 7]
// //       я пишу число 4
// //       моє число з масиву під індексом 4 замінється і стає на позицію 5, а те число з 5 стає на 4
// //       і масив получається [3, 2, 1, 8, 7, 5]

//створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
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
// console.log(filterZero([1, 0, 6, 0, 3]))
// console.log(filterZero([0, 1, 2, 3, 4]))


//Створити функцію яка :
//
// - Додає в боді блок з текстом "Hello owu"

// function addDiv() {
//     let div = document.createElement('div')
//     div.innerText = 'Hello owu'
//     document.body.appendChild(div)
//
// }
// addDiv()

//
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
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
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

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
//     const block = document.getElementById(id)
//     const ul = document.createElement("ul")
//     for (let i = 0; i < array.length; i++) {
//         const carEl = array[i];
//         const li = document.createElement("li")
//         li.innerText = `${carEl.id}, ${carEl.name}, ${carEl.model}, ${carEl.age}, ${carEl.powerKw}, ${carEl.color}`
//         ul.appendChild(li)
//     }
//     block.appendChild(ul)
//
//     document.body.appendChild(block)
//
// }
//
// carsArray(cars, 'list')


//
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//

// function carsArray(array, id) {
//     const block = document.getElementById(id)
//     const name = document.createElement("div")
//     for (let i = 0; i < array.length; i++) {
//         const carEl = array[i];
//         const div = document.createElement("div")
//
//         div.innerText = `${carEl.id} ${carEl.name}`
//
//         const h3 = document.createElement("h3")
//         h3.innerText = `${carEl.model}, ${carEl.age}, ${carEl.powerKw}, ${carEl.color}`
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
// Для кожної властивості створити всередені блока автомоблія свій блок

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
//
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
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