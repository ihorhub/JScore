//создать массив с 20 числами.
//
// -- при помощи метода sort и колбека  отсортировать массив.
//
// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 34, -46, 3, 5, 9, 81, 0.15, 99, 102]
// let sortNumber = numbers.sort(function (a, b) {
//     return a - b
//
// })
// console.log(sortNumber)



// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 34, -46, 3, 5, 9, 81, 0.15, 99, 102]
// let sortNumber = numbers.sort(function (a, b) {
//     return b - a
//
// })
// console.log(sortNumber)


//
// -- при помощи filter получить числа кратные 3

// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364,150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102,50]
// let fiterNumber = numbers.filter(function (a) {
//     return d = a % 3 === 0
//
// })
// console.log(fiterNumber)



// -- при помощи filter получить числа кратные 10

// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102, 50]
// let fiterNumber = numbers.filter(function (a) {
//     return d = a % 10 === 0
//
// })
// console.log(fiterNumber)
//
// let  fiterNumber = numbers.filter(a => a % 10 === 0)
// console.log(fiterNumber)

// -- перебрать (проитерировать) массив при помощи foreach()
//



// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102, 50]
// numbers.forEach(function (x) {
//     console.log(x)
//
// })

//// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102, 50]
// let arrNumber = numbers.map(function (x) {
//     return x * 3
//
// })
// console.log(arrNumber)

// создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let names = ['sophie', 'red', 'waldo', 'chocolate', 'vanilla', 'stephen', 'henry', 'h', 'e', 'l', 'strawberry', 'l', 'george', 'o']
// names.sort()
//     console.log(sortName)


// let names = ['sophie', 'red', 'waldo', 'chocolate', 'vanilla', 'stephen', 'henry', 'h', 'e', 'l', 'strawberry', 'l', 'george', 'o']
// names.sort()
//
// let sortName = names.reverse() //  !!це загуглив, але як інакше  зробити незнаю, напиши варіант
//
// console.log(sortName)



// -- отфильтровать слова длиной менее 4х символов
// let names = ['sophie', 'red', 'waldo', 'chocolate', 'vanilla', 'stephen', 'henry', 'h', 'e', 'l', 'strawberry', 'l', 'george', 'o']
// let shotName = names.filter(function (a) {
//     if (a.length < 4) {
//         return 1
//     }
// })
// console.log(shotName)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let names = ['sophie', 'red', 'waldo', 'chocolate', 'vanilla', 'stephen', 'henry', 'h', 'e', 'l', 'strawberry', 'l', 'george', 'o']
// let newName = names.map(function (a) {
//     return a + '!'
//
// })
// console.log(newName)



//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)/
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];
// let ageUser = users.sort(function (a, b) {
//     //  return a.age-b.age
//     return b.age - a.age
// })
// console.log(ageUser)

// let lengthName = users.sort(function (a, b) {
//         if (a.name.length < b.name.length) {
//             return -1
//         }
//     } )
// console.log(lengthName)

// let lengthName = users.sort(function (a, b) {
//         if (a.name.length > b.name.length) {
//             return -1
//         }
//     })
// console.log(lengthName)
// let newUser = users.map(function (user, index) {
//     user.id = index + 1
//     return user
//
// })
// newUser.sort(function (a, b) {
//     return a.id - b.id
// })
//
// console.log(newUser)


// наисать функцию калькулятора с 2мя числами и колбеком
//


// function calculator(a,b,callback) {
//     return callback(a,b)
// }
// calculator( 15,80,function (a,b) {
//     console.log(a+b)
//
// })

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(a, b, c, callback) {
//     return callback(a, b, c)
// }
// calculator(15, 80, 54, function (a, b, c) {
//     console.log(a + b - c)
//
// })

//=============КЛАССНАЯ РАБОТА=================


// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//
// Відфільтрувати масив за наступними крітеріями :
//
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв


// let volumeCar = cars.filter(item => item.volume > 3)
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.volume === 2)
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.producer==="mercedes" )
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.producer==="mercedes"&&item.volume>=3 )
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.producer==="subaru"&&item.volume>=3 )
// console.log(volumeCar)

// let powerCar = cars.filter(item => item.producer === "subaru" && item.power > 300)
// console.log(powerCar)

// let engineCar = cars.filter(item => item.engine.startsWith('ej'))
// console.log(engineCar)


// let engineCar = cars.filter(item => item.engine.startsWith('ej') && item.power >= 300 && item.producer === "subaru")
// console.log(engineCar)


// let volumeCar = cars.filter(item => item.producer === "mercedes" && item.volume < 3)
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.power > 250 && item.volume > 2)
// console.log(volumeCar)

// let volumeCar = cars.filter(item => item.power > 250 && item.producer === "bmw")
// console.log(volumeCar)



///Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
//
//
// Пример:
//
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//
// 1. Key = 1
//
// Answer: MinIndex = 0, MaxIndex = 0.
//
// 2. Key = 4
//
// Answer: MinIndex = 3, MaxIndex = 6.

// let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//
// function firstAndLast(array, el) {
//     let min = array.indexOf(el)
//     let max = array.lastIndexOf(el)
//     console.log(`Answer: MinIndex =${min},MaxIndex =${max}`)
// }
//
// firstAndLast(Arr, 4)