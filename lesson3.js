//-1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//  let user = {
//     name: 'vitja',
//      age: 35,
//      status: 'active',
//  };
// let car={
//     model: 'Lamborghini',
//     releaseDate: '2019',
//     duration:10523,
//     buying: true
//
// };
// let cat={
//     cyti: 'Stryj',
//     color: 'white',
//     love: false
// };
// let house={
//     size: 'larg',
//     width: 15,
//     numberOfFloors:3,
//     background:'orange'
// };
// let country={
//     state: 'Ukraine',
//     population:42,
//     language: 'ukrainian',
//     square:603,
//     independence:true
// }


// 2 создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = { name: 'kokos', skills : ['html','css','js'] , wife: { name: 'Lesya',age:30 } };
// let film= { name:'Star Wars', duration:134 , releaseDate: 2010, actors:['Mark Hamill','Harrison Ford','Carrie Fisher'],format:{disk: 'blue-ray'}};
// let cars= {mark:{model:'TESLA', typ:'crossover'},price:[160,70,90],year:2020 };
// let state={ contry: 'Ukraine', population:42, language: ['ukrainian','rusian','english'], square:603, independence:true , touns:{
//         regional:24,area:490}}
// let animal={kind:['ссавці', 'плазуни' ],origin:'одноклітинниі джгутиковиі',typs:{unit:'Orthonectida',subkingdom:'Справжні багатоклітинні '}};


//- 3  При помощи for in вывести все ключи всех объектов из задания 1.2
// for (const userKey in user) {
//     console.log(userKey)
//
// }
// for (const carKey in car) {
//     console.log(carKey)
// }
// for (const catKey in cat) {
//     console.log(catKey);
// }
// for (const houseKey in house) {
//     console.log(houseKey);
//
// }
// for (const countryKey in country) {
//     console.log(countryKey);
// }
// for (const animalKey in animal) {
//     console.log(animalKey);
// }
// for (const stateKey in state) {
//     console.log(stateKey);
// }
// for (const carsKey in cars) {
//     console.log(carsKey);
// }
//
// for (const filmKey in film) {
//     console.log(filmKey);
// }
// for (const manKey in man) {
//     console.log(manKey);
// }

// 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2


// let user1=Object.keys(user)
// console.log(user1);
// let car1=Object.keys(car)
// console.log(car1);
// let cat1=Object.keys(cat)
// console.log(cat1);
// let house1=Object.keys(house)
// console.log(house1);
// let country1=Object.keys(country)
// console.log(country1);
// let man1=Object.keys(man)
// console.log(man1);
// let film1=Object.keys(film)
// console.log(film1);
// let cars1=Object.keys(cars)
// console.log(cars1);
// let animal1=Object.keys(animal)
// console.log(animal1);
// let state1=Object.keys(state)
// console.log(state1);





// 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными
// let cars = [
//     {name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black'},
//     {name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze'},
//     {name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white'},
//     {name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green'},
//     {name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver'},
//     {name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black'},
//     {name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red'},
//     {name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color:'blue'},
//     {name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow'},
// ]
//  6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name: 'Lviv', population: 800, country: 'Ukraine', region: 'lviv'},
//     {name: 'Stry', population: 59, country: 'Ukraine', region: 'lviv'},
//     {name: 'Berlin', population: 3700, country: 'Germany', region: 'Berlin'},
//     {name: 'Odesa', population: 993, country: 'Ukraine', region: 'Odesa'},
//     {name: 'Praha', population: 1300, country: 'Cherch', region: 'Praha'},
//     {name: 'Celakovice', population: 12.2, country: 'Cherch', region: 'Praha'},
//     {name: 'Wien', population: 1900, country: 'Austria', region: 'Wien'},
//     {name: 'Krakow', population: 760, country: 'Poland', region: 'Krakow'},
//     {name: 'Brest', population: 343, country: 'Belarus', region: 'Brest'}
//
// ]
//  7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars1 = [
//     {name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black',driver:{name:'Vasya',age:35,sex:'male',experience:15}},
//     {name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze',driver:{name:'P1etya',age:30,sex:'male',experience:10}},
//     {name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white',driver:{name:'Lesya',age:31,sex:'female',experience:12}},
//     {name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green',driver:{name:'Lena',age:29,sex:'female',experience:9}},
//     {name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver',driver:{name:'Vitya',age:40,sex:'male',experience:25}},
//     {name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black',driver:{name:'Kokos',age:55,sex:'male',experience:35}},
//     {name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red',driver:{name:'Gora',age:43,sex:'male',experience:17}},
//     {name: 'Lada', model: '2110', age: '2015', powerKw: 58, color: 'crimson',driver:{name:'lyolik',age:22,sex:'male',experience:4}},
//     {name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color: 'blue',driver:{name:'Bolik',age:27,sex:'male',experience:7}},
//     {name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow',driver:{name:'Nina',age:29,sex:'female',experience:15}}
//
// ]
// 8 проитерировать каждый массив из задания 5,6,7 при помощи while.
// let j=0
// while (j<cars.length) {
//     let carses = cars[j]
//     console.log(carses);
//     j++
// }
//
//
// let i = 0
// while (i < cities.length) {
//     let citi = cities[i]
//     console.log(citi)
//     i++
// }
// let z = 0
// while (z < cars1.length) {
//     let cars1new=cars1[z]
//     console.log(cars1new)
//
//     z++
// }
//  9 проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars1.length; i++) {
//     const cars1new = cars1[i];
//     console.log(cars1new);
//
// }
// for (let j = 0; j < cities.length; j++) {
//      const city = cities[j];
//     console.log(city)
// }

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
//
// }

// 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const car1new of cars1) {
//     console.log(car1new);
// }
// for (const city of cities) {
//     console.log(city)
// }
// for (const car of cars) {
//     console.log(car)
// }
//  11-взять объекты из задания 1 и превратить каждый в json.
// let user = {
//     name: 'vitja',
//     age: 35,
//     status: 'active'
// };
// let stringuser = JSON.stringify(user)
// console.log(stringuser)
//
// let car={
//     model: 'Lamborghini',
//     releaseDate: '2019',
//     duration:10523,
//     buying: true
// };
// let stringCar=JSON.stringify(car)
// console.log(stringCar);
//
// let cat={
//     cyti: 'Stryj',
//     color: 'white',
//     love: false
// };
// let stringCat=JSON.stringify(cat)
// console.log(stringCat);
//
// let house={
//     size: 'larg',
//     width: 15,
//     numberOfFloors:3,
//     background:'orange'
// };
// let stringHouse=JSON.stringify(house)
// console.log(stringHouse);
//
// let country={
//     state: 'Ukraine',
//     population:42,
//     language: 'ukrainian',
//     square:603,
//     independence:true
// }
// let stringCountry=JSON.stringify(country)
// console.log(stringCountry);
// console.log( typeof stringCountry )
// 12- взять json из задания 11 и превратить их обратно в объекты.
// let parseuser = JSON.parse(stringuser)
// console.log(parseuser)
// let parseCar=JSON.parse(stringCar)
// console.log(parseCar);
// let parseCat=JSON.parse(stringCat)
// console.log(parseCat);
// let parseHouse=JSON.parse(stringHouse)
// console.log(parseHouse);
// let parseCountry=JSON.parse(stringCountry)
// console.log(parseCountry);


// 13 взять массив из задания 5,в цикле перебрать его объекты превратив их в json
// let cars = [
//     {name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black'},
//     {name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze'},
//     {name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white'},
//     {name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green'},
//     {name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver'},
//     {name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black'},
//     {name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red'},
//     {name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color:'blue'},
//     {name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow'},
// ]
// for (const car of cars) {
//     let strCar= JSON.stringify(car)
//     console.log(strCar);
// }

//14взять массив из задания 6,в цикле перебрать его объекты превратив их в json
// let cities = [
//     {name: 'Lviv', population: 800, country: 'Ukraine', region: 'lviv'},
//     {name: 'Stry', population: 59, country: 'Ukraine', region: 'lviv'},
//     {name: 'Berlin', population: 3700, country: 'Germany', region: 'Berlin'},
//     {name: 'Odesa', population: 993, country: 'Ukraine', region: 'Odesa'},
//     {name: 'Praha', population: 1300, country: 'Cherch', region: 'Praha'},
//     {name: 'Celakovice', population: 12.2, country: 'Cherch', region: 'Praha'},
//     {name: 'Wien', population: 1900, country: 'Austria', region: 'Wien'},
//     {name: 'Krakow', population: 760, country: 'Poland', region: 'Krakow'},
//     {name: 'Brest', population: 343, country: 'Belarus', region: 'Brest'}
// ]
// for (let i = 0; i < cities.length; i++) {
//     const city = cities[i];
//     console.log(JSON.stringify(cities));
// }

//15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars1 = [
//     {name: 'Tesla', model: 'ModelX', age: '2018', powerKw: 100, color: 'black',driver:{name:'Vasya',age:35,sex:'male',experience:15}},
//     {name: 'Toyota', model: 'Camry', age: '2010', powerKw: 98, color: 'bronze',driver:{name:'P1etya',age:30,sex:'male',experience:10}},
//     {name: 'Honda', model: 'CRV', age: '2020', powerKw: 183, color: 'white',driver:{name:'Lesya',age:31,sex:'female',experience:12}},
//     {name: 'Volkswagen', model: 'Passat', age: '2016', powerKw: 191, color: 'green',driver:{name:'Lena',age:29,sex:'female',experience:9}},
//     {name: 'Audi', model: 'Q5', age: '2017', powerKw: 210, color: 'silver',driver:{name:'Vitya',age:40,sex:'male',experience:25}},
//     {name: 'Ford', model: 'Escape', age: '2013', powerKw: 151, color: 'black',driver:{name:'Kokos',age:55,sex:'male',experience:35}},
//     {name: 'Ferrari', model: '488Spider', age: '2019', powerKw: 435, color: 'red',driver:{name:'Gora',age:43,sex:'male',experience:17}},
//     {name: 'Lada', model: '2110', age: '2015', powerKw: 58, color: 'crimson',driver:{name:'lyolik',age:22,sex:'male',experience:4}},
//     {name: 'Skoda', model: 'Octavia', age: '2009', powerKw: 81, color: 'blue',driver:{name:'Bolik',age:27,sex:'male',experience:7}},
//     {name: 'BMW', model: 'X5', age: '2017', powerKw: 195, color: 'yellow',driver:{name:'Nina',age:29,sex:'female',experience:15}}
//
// ]
// let arrayCars = []
// for (let i = 0; i < cars1.length; i++) {
//     const arrCar = cars1[i];
//     arrayCars.push(JSON.stringify(arrCar))
// }
// console.log(arrayCars);
// console.log(typeof arrayCars)


// 16 Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//
//  17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//     Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
//     Скопировать все skills всех пользовате
// let users =[
//     { name: 'kokos', skills : ['java','js','NodeJS'] ,age: 32,  wife: { name: 'Lesya',age:30 } },
//     { name : 'Vasya', skills: ['node js','js'] ,age:  25 },
//     { name: 'kokos', skills: ['driver','expedition'] ,age :45 },
//     { name: 'Kolya', skills: ['manager','js'] , age: 28 },
//     { name: 'Petya', skills: ['trener','swiming'] ,age: 48  }
// ]
// for (const usersKeys of users) {
// console.log(usersKeys)
//     for (const usKey of usersKeys.skills) {
//         console.log(usKey)
//     }
// }


// let newarray = []
// for (const user of users) {
//     console.log(user)
//     for (const userElement of user.skills) {
//         newarray.push(userElement)
//     }
// }
// console.log(newarray)


// 18- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//     for (const newUser of users) {
//         console.log(newUser);
//         for (const userKey of newUser.skills) {
//            console.log(userKey);
//        }
//     }



//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{name:'vasya',age: 31,status:false,address:{city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}},
    {name:'petya',age: 30,status: true, address: {city: 'New York', country:'USA',street:'East str', houseNumber: 21}},
    {name:'kolya',age: 29,status: true,address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}},
    {name: 'olya',age: 28,status: false,address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}},
    {name: 'max',age: 30,status: true,address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}},
    {name: 'anya',age: 31,status: false,address: {city: 'Rio', country: 'Brasil', street:'Ronaldi', houseNumber: 5}},
    {name: 'oleg',age: 28,status: false,address: {city: 'Montreal', country: 'Canada',treet:'Acusto',houseNumber: 90}},
    {name: 'andrey',age: 29,status: true,address: {city: 'Quebeck', country: 'Canada',street:'Binaro',houseNumber: 33}},
    {name: 'masha',age: 30,status: true,address: {city: 'Moscow', country: 'Russia', street:'Gogolia',houseNumber: 1}},
    {name: 'olya',age: 31,status: false,address: {city: 'Portland',country:'USA', street:'Forest str',houseNumber: 4}},
    {name: 'max',age: 31,status: true,address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}
    ];


//// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let array = []
// for (const newaddres of users) {
//     array.push(newaddres.address)
// }
// console.log(array)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (const user of users) {
//     const divElement = document.createElement("div")
//    divElement.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country}
//    ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(divElement)
//     console.log(divElement)
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div1=document.createElement( "div")
//     let h2=document.createElement("h2")
//     let p1=document.createElement( "p1")
//     let p2= document.createElement( "p2")
//     div1.innerText=`${user.name}`
//     h2.innerText=`${user.age}`
//     p2.innerText=`${user.status}`
//     p1.innerText=`${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
//     div1.appendChild(h2)
//     div1.appendChild(p1)
//     div1.appendChild(p2)
//     document.body.appendChild(div1)
//     console.log(div1)
// }


////// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // // розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let div = document.createElement("div")
//     let name = document.createElement("h1")
//     let age = document.createElement("h2")
//     let status = document.createElement("p")
//     let addres = document.createElement("div")
//     name.innerText = user.name
//     age.innerText = user.age
//     status.innerText = user.status
//     for (const ageElement in user.address) {
//         const temp = document.createElement("div")
//         temp.innerText = ageElement
//         addres.appendChild(temp)
//     }
//     div.appendChild(name)
//     div.appendChild(age)
//     div.appendChild(status)
//     div.appendChild(addres)
//
//
//     document.body.appendChild(div)
//
//     console.log(div)
// }

// for (const user of users) {
//     let divUser1=document.createElement('div')
//
//     for (const divKey2 in user) {
//         let divUser2 = document.createElement('div')
//         divUser2.innerText = `  ${divKey2} - ${user[divKey2]} `
//         divUser1.appendChild(divUser2)
//
//         // !!!! ЯК ЗРОБИТИ ЩОБ НЕ ПИСАТИ ЗАЗДАЛЕГІДЬ НАЗВУ ВІДОМОЇ ПРОПЕРТІ МАСИВА "АДРЕС",ЯКЩО Я НЕ ЗНАЮ ЩО В МАСИВІ Є ЩЕ ОДИН МАСИВ????
//         // НАРАЗІ ВОНО ПРАЦЮЄ,   ПРОБУВАВ ЩЕ РАЗ ЧЕРЕЗ ЦИКЛИ ПРОГАНЯТИ ФОР ОФ + ІН, АЛЕ ЧОМУСЬ АБО ОКРЕМІ БУКВИ АБО НІЧОГО НЕ РОБИЛО
//
//         for (const divKey3 in user.address) {
//             let divUser3 = document.createElement('div')
//             divUser3.innerText=`${divKey3}  ${user.address[divKey3]} `
//             divUser2.appendChild(divUser3)
//
//         }
//     }
//     document.body.appendChild(divUser1)
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
//
//Масиви:
//    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//    {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

/// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //
// // Записати цей об'єкт в новий масив//
// // Частковий приклад реультату:
//// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya',  age: 28, status: false },];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4,  country: 'USA', city: 'Miami' },];
// let usersWithCities = []
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id)
//
//             usersWithCities.push({...user, ...city})
//     }
//
// }
//
// console.log(usersWithCities)



// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// змінити цей текст використовуючи селектори id, class,  tag
// let elementByid = document.getElementById('content')
// let innerText = elementByid.innerText
// console.log(innerText)
//
// let elementsByClassName = document.getElementsByClassName('class')
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = "popopop"
//     console.log(elementsByClassNameElement)
// }
// let elmentByTag = document.getElementsByTagName('h2')
// for (const elmentByTagElement of elmentByTag) {
//     elmentByTagElement.innerText = "hohohoho"
//     console.log(elmentByTagElement)
// }

//змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elmentByTag=document.getElementsByTagName('h2')
// for (const elmentByTagElement of elmentByTag) {
//     elmentByTagElement.style.width='300px'
//     elmentByTagElement.style.height='300px'
// }

//за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всереденіъ

// const table = document.createElement('table')
// const tr = document.createElement('tr')
// const td = document.createElement("td")
// const td2 = document.createElement("td")
// const td3 = document.createElement("td")
// tr.appendChild(td)
// tr.appendChild(td2)
// tr.appendChild(td3)
// table.appendChild(tr)
// document.body.appendChild(table)


// за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table')
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr')
//     for (let j = 0; j < 3; j++) {
//         const td = document.createElement("td")
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// const table = document.createElement('table')
// let n = prompt('enter n line')
// let m = prompt('enter m cell')
// for (let i = 0; i < n; i++) {
//     const tr = document.createElement('tr')
//
//     for (let j = 0; j < m; j++) {
//         const td = document.createElement("td")
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)




//-Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//
//  - знайти всі елементі, які мають class
//
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//
//  - знайти всі div та змінити ім колір на червоний

// const elementsByTagName = document.getElementsByTagName('*')
// for (const tagNameMap of elementsByTagName) {
//     if (tagNameMap.getAttribute('class')) {
//         console.log(tagNameMap);
//     }
//
// }
// let elementNodeListOf = document.querySelectorAll('[id]')
// console.log(elementNodeListOf);

// знайти всі параграфи ,та змінити текст на hello oktenweb!
// const elementsByTagName = document.getElementsByTagName('p')
// for (const tagNameMap of elementsByTagName) {
//    tagNameMap.innerText='hello oktenweb!'
//     }

//знайти всі div та змінити ім колір на червоний

// const elementsByTagName = document.getElementsByTagName('div')
// for (const tagNameMap of elementsByTagName) {
//     tagNameMap.style.backgroundColor = 'red'}



//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//
//
// -
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
// let arrayH2 = document.getElementsByTagName('h2')
// let content = document.getElementById('content')
// let ul = document.createElement('ul')
// for (const H2Element of arrayH2) {
//     const li = document.createElement('li')
//     li.innerText = H2Element
//     ul.appendChild(li)
// }
// content.appendChild(ul)



//Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// //
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


// const wrap = document.createElement('div')
// wrap.id = 'wrap'
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i]
//     const div = document.createElement("div")
//     const h2 = document.createElement('h2')
//     const p = document.createElement('p')
//     div.className = `rules rules${i + 1}`
//     h2.innerText = rule.title
//     p.innerText = rule.body
//     div.appendChild(h2)
//     div.appendChild(p)
//     wrap.appendChild(div)
// }
//
// document.body.appendChild(wrap)


//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(users => {
//         return users.json();
//     })
//     .then(users => {
//             console.log(users)
//
//             for (const argument of users) {
//                 let divElement = document.getElementsByClassName('div')
//                 let div = document.createElement('div')
//                 div.innerText= `${[argument]}`
//
//                 for (const divKey in div) {
//                     let h1 = document.createElement('h1')
//                     h1.innerText = `${[divKey]}`
//                     div.appendChild(h1)
//                     document.body.appendChild(div)
//                 }
//
//             }
//
//         }
//     )

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
//
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
