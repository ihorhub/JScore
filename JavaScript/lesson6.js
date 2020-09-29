//создать массив с 20 числами.
//
//-- при помощи метода sort и колбека  отсортировать массив.

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

//  let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364,150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102,50]
//
// let fiterNumber = numbers.filter(function (value) {
//     return value % 3 ===0
//
// })
// console.log(fiterNumber)

// let numbers1 = numbers.filter((value) => {
//     return value % 2 === 0;
// });
// console.log(numbers1);


// -- при помощи filter получить числа кратные 10

// let numbers = [2, 15, 88, 123, -12, 64, 0, 15, 364, 150, 34, -46, 3, 5, 9, 81, 0.15, 99, 102, 50]
// // let fiterNumber = numbers.filter(function (value) {
//     return value % 10===0
//
// })
// console.log(fiterNumber)



//-- перебрать (проитерировать) массив при помощи foreach()




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

//let names = ['sophie', 'red', 'waldo','Atom', 'chocolate', 'vanilla', 'fephen', 'henry', 'zz', 'e', 'l', 'berry', 'QWE', 'george', 'o']
  // let sortName=  names.sort()
  //   console.log(sortName)

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let names = ['sophie', 'red', 'waldo', 'Atom', 'chocolate', 'vanilla', 'fephen', 'henry', 'zz', 'e', 'l', 'berry', 'QWE', 'george', 'o']
// let sort2 = names.sort((a, b) => {
//     if (a < b) {
//         return 1
//     } else {
//         return -1
//     }
// });
//
// console.log(sort2);


// -- отфильтровать слова длиной менее 4х символов

//let names = ['sophie', 'red', 'waldo', 'chocolate', 'vanilla', 'stephen', 'henry', 'h', 'e', 'l', 'strawberry', 'l', 'george', 'o']
// let shotName = names.filter(function (a) {
//     if (a.length < 4) {
//         return 1
//     }
// })
//console.log(shotName)

// let filtName=names.filter(value => {
//     if (value.length<4){
//         return true
//     }
// } )
// console.log(filtName)

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

// let  newUsers = []
// let user = users.map(function (value, index) {
//     value.id = index + 1
//   return  value
//
//
//  })
//     newUsers.push(user)
// newUsers.sort(function (a, b) {
//     return a.id - b.id
// })
//
// console.log(newUsers)





// наисать функцию калькулятора с 2мя числами и колбеком
//


// function calculator(a,b,callback) {
//  console.log(callback(a,b))
// }
// calculator(25,55,function (a,b) {
//     return a+b
//
// })



// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(a, b, c, callback) {
//    callback(a, b, c)
//     console.log(callback(a,b,c))
// }
// calculator(15, 80, 54, function (a, b, c) {
//    return a+b-c
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
//
// let volumeCar2 = cars.filter(item => item.volume === 2)
// console.log(volumeCar2)
//
// let produsCa = cars.filter(item => item.producer==="mercedes" )
// console.log(produsCa)
//
// let producCar3 = cars.filter(item => item.producer==="mercedes"&&item.volume>=3 )
// console.log(producCar3)
//
// let subaruCar3 = cars.filter(item => item.producer==="subaru"&&item.volume>=3 )
// console.log(subaruCar3)
//
// let powerCar = cars.filter(item =>  item.power > 300)
// console.log(powerCar)
//
// let powerSubaruCar = cars.filter(item => item.producer === "subaru" && item.power > 300)
// console.log(powerSubaruCar)
//
// let engineCar = cars.filter(item => item.engine.startsWith('ej'))
// console.log(engineCar)
//
//
// let enginePowCar = cars.filter(item => item.engine.startsWith('ej') && item.power >= 300 && item.producer === "subaru")
// console.log(enginePowCar)
//
//
// let volumeMersCar = cars.filter(item => item.producer === "mercedes" && item.volume < 3)
// console.log(volumeMersCar)
//
// let volumePowerCar = cars.filter(item => item.power > 250 && item.volume > 2)
// console.log(volumePowerCar)
//
// let powerBMWCar = cars.filter(item => item.power > 250 && item.producer === "bmw")
// console.log(powerBMWCar)


// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Konovalca', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Lubinska', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Doroshenka', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Majdan', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Chuprynky', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Geroiv_UPA', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Horodocka', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Kulparkivska', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Franka', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Antonovicha', number: 121}}];
//отсортировать его по id пользователей
// let sortId=usersWithAddress.sort((a,b)=>{
//     return a.id-b.id
// })
// console.log(sortId);


// -- отсортировать его по id пользователей в обратном опрядке
// let sortIdrevers=usersWithAddress.sort((a,b)=>{
//     return b.id-a.id
// })
// console.log(sortIdrevers);

// -- отсортировать его по возрасту пользователей
// let sortAge=usersWithAddress.sort((a,b)=>{
//     return a.age-b.age
// })
//  console.log(sortAge);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortAgerever=usersWithAddress.sort((a,b)=>{
//     return b.age-a.age
// })
// console.log(sortAgerever);


// -- отсортировать его по имени пользователей
// let sortName=usersWithAddress.sort((a,b)=>{
//     if (a.name<b.name)
//     return -1
// })
// console.log(sortName);
// -- отсортировать его по имени пользователей в обратном порядке
// let sortNameRev=usersWithAddress.sort((a,b)=>{
//     if (a.name>b.name)
//         return -1
// })
// console.log(sortNameRev);
// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortStreet=usersWithAddress.sort((a,b)=>{
//     if (a.address.street<b.address.street)
//         return -1
// })
// console.log(sortStreet);
// -- отсортировать его по номеру дома по возрастанию
// let  sortNumber = usersWithAddress.sort((a,b)=>{
//     return a.address.number-b.address.number
// })
// console.log(sortNumber);

// -- отфильтровать (оставить) тех кто младше 30
// let filterUser= usersWithAddress.filter(value => value.age<30)
//     console.log(filterUser);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let  filterStatus = usersWithAddress.filter(value => value.status===false)
// console.log(filterStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let statusUser=usersWithAddress.filter(value => value.status===false&&value.age<30)
// console.log(statusUser);


// -- отфильтровать (оставить) тех у кого номер дома четный
// let numberHous= usersWithAddress.filter(value => value.address.number%2===0)
// console.log(numberHous);


// творити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// //
// let cars = [
//     {name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black',driver:{name:'Vasya',age:35,sex:'male',experience:15}},
//     {name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze',driver:{name:'P1etya',age:30,sex:'male',experience:10}},
//     {name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white',driver:{name:'Lesya',age:31,sex:'female',experience:12}},
//     {name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green',driver:{name:'Lena',age:29,sex:'female',experience:9}},
//     {name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver',driver:{name:'Vitya',age:40,sex:'male',experience:25}},
//     {name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black',driver:{name:'Kokos',age:55,sex:'male',experience:35}},
//     {name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red',driver:{name:'Gora',age:43,sex:'male',experience:17}},
//     {name: 'Lada', model: '2110', age: '2015', powerKw: 58, color: 'crimson',driver:{name:'lyolik',age:22,sex:'male',experience:4}},
//     {name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color: 'blue',driver:{name:'Bolik',age:27,sex:'male',experience:7}},
//     {name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow',driver:{name:'Nina',age:29,sex:'female',experience:15}}]
// console.log(cars);

// let repasMotor= cars.forEach((value, index) => {
//     if (index % 2 === 0) {
//
//         return value
//     }
// })
//     console.log(repasMotor);
// for (let i = 0; i < cars.length; i=i+2) {
//     const car = cars[i];
// Math.round(car.powerKw)*2
//     console.log(car);
// }


///Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//
// function firstAndLast(array, el) {
//     let min = array.indexOf(el)
//     let max = array.lastIndexOf(el)
//     console.log(`Answer: MinIndex =${min},MaxIndex =${max}`)
// }
//
// firstAndLast(Arr, 9)



function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const fCounter = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        fCounter[letter] ? fCounter[letter] += 1 : fCounter[letter] = 1
        console.log(fCounter);

    }


    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!fCounter[letter]) {
            return false
        } else {
            fCounter[letter] -= 1
        }
    }

    return true

}


console.log(validAnagram('damaa', 'amida'));
