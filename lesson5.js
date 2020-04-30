//Створити функцію конструктор для об'єкту який описує теги
//Властивості
//-назва тегу
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити

//-назву атрибуту
//-опис дії атрибуту

//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// function Tag(titleOfTag, action, attrs) {
//         this.titleOfTag=titleOfTag ||" no title"
//         this.action=action|| "no action"
//         this.attrs=attrs|| []
//
// }
// let title='<a>'
// let action ='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.'
// let attibytes=[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
// ]
// let a= new Tag(title,action,attibytes)
// console.log(a)


// Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги//
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//
//         {/*some props and values*/},
//
//         {/*...*/},
//
//         {/*...*/},
//
//         ]
//
//
//
//    }

// class Tag{
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag=titleOfTag ||" no title"
//         this.action=action|| "no action"
//         this.attrs=attrs|| []
//
//     }
// }
//
//
//
// let title='<a>'
// let action ='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.'
// let attibytes=[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
// ]
// let a= new Tag(title,action,attibytes)
// console.log(a)


//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//
// -- info () - яка виводить всю інформацію про автомобіль
//
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'ModelX',
//     manufacturer: 'Tesla',
//     year: '2019',
//     maxSpeed: 210,
//     powerKw: 100,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//
//     },
//     info: function () {
//         if (this.shafer){
//         console.log(`
//             model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//                 shafer:${this.shafer.name}
//         `)
//         } else{
//             console.log(`
//                 model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//             `)
//         }
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed
//
//     },
//     changeYear: function (newValue) {
//         this.year = newValue
//
//     },
//     addDriver: function (driver) {
//         this.shafer = driver
//
//     }
// }
// let driver ={name: ' ivan ivanovich', age:45}
//
// car.increaseMaxSpeed(50)
// car.changeYear(2020);
// car.addDriver(driver);
// car.info();
// car.drive();


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//
// -- info () - яка виводить всю інформацію про автомобіль
//
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let driver = {name: ' ivan ivanovich', age: 45}
//
// function Car(model, manufacturer, year, maxSpeed, powerKw) {
//     this.model = model ,
//         this.manufacturer = manufacturer ,
//         this.year = year ,
//         this.maxSpeed = maxSpeed ,
//         this.powerKw = powerKw ,
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//
//         },
//         this.info = function () {
//             if (this.shafer) {
//                 console.log(`
//             model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//                 shafer:${this.shafer.name}
//         `)
//             } else {
//                 console.log(`
//                 model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//             `)
//             }
//         },
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed
//
//         },
//         this.changeYear = function (newValue) {
//             this.year = newValue
//
//         },
//         this.addDriver = function (driver) {
//             this.shafer = driver
//
//         }
// }
//
// let car = new Car('tiguan', 'Volkdwqgen', 2015, 198, 136)
// car.increaseMaxSpeed(50)
//
// car.changeYear(2020);
// car.addDriver(driver);
// car.info();
// car.drive();

//
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//
// -- info () - яка виводить всю інформацію про автомобіль
//
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let driver = {name: ' ivan ivanovich', age: 45}
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, powerKw) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.powerKw = powerKw
//     }
//
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//
//     }
//
//     info() {
//         if (this.shafer) {
//             console.log(`
//             model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//                 shafer:${this.shafer.name}
//         `)
//         } else {
//             console.log(`
//                 model:  ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year},
//             maxSpeed:${this.maxSpeed},
//             powerKw: ${this.powerKw},
//             `)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//
//     }
//
//     addDriver(driver) {
//         this.shafer = driver
//
//     }
// }
//
//
// let car = new Car('tiguan', 'Volkdwqgen', 2015, 198, 136)
// car.increaseMaxSpeed(50)
//
// car.changeYear(2020);
// car.addDriver(driver);
// car.info();
// car.drive();
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
//
// --Створити 10 попелюшок , покласти їх в масив
//
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

//
// class Human {
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
//
// class Cinderella extends Human {
//
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize
//     }
// }
//
// class Prince extends Human {
//
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize
//     }
//
//     findCinderell(array) {
//         let find = null
//         for (const item of array) {
//             if (item.footSize === this.shoeSize) {
//                 find = item
//
//             }
//         }
//         if (find) {
//             console.log('My Cinderella name  ' + find.name)
//         } else {
//             console.log('i not find my Cinderella')
//         }
//     }
// }
//
// let Cinderella1 = new Cinderella('Mila', 16, 35)
// let Cinderella2 = new Cinderella('Veronika', 17, 35.5)
// let Cinderella3 = new Cinderella('Karina', 19, 36.5)
// let Cinderella4 = new Cinderella('Ylia', 21, 38)
// let Cinderella5 = new Cinderella('Monika', 20, 37)
// let Cinderella6 = new Cinderella('Kamila', 18, 37.5)
// let Cinderella7 = new Cinderella('Elza', 19, 36)
// let Cinderella8 = new Cinderella('Anna', 24, 38.5)
// let Cinderella9 = new Cinderella('Sofia', 27, 38)
// let Cinderella10 = new Cinderella('Alisa', 25, 39)
//
// let arrayCinderells = [Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10]
// let prince = new Prince('Ivan', 21, 36)
// prince.findCinderell(arrayCinderells)


//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//
// --Створити 10 попелюшок , покласти їх в масив
//
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, footSize) {
//     this.name = name
//     this.age = age
//     this.footSize = footSize
//
// }
//
//
// function Prince(name, age, shoeSize) {
//     this.name = name
//     this.age = age
//     this.shoeSize = shoeSize
//
//
//     this.findCinderell = function (array) {
//         let find = null
//         for (const item of array) {
//             if (item.footSize === this.shoeSize) {
//                 find = item
//
//             }
//         }
//         if (find) {
//             console.log('My Cinderella name  ' + find.name)
//         } else {
//             console.log('i not find my Cinderella')
//         }
//     }
// }
//
// let Cinderella1 = new Cinderella('Mila', 16, 35)
// let Cinderella2 = new Cinderella('Veronika', 17, 35.5)
// let Cinderella3 = new Cinderella('Karina', 19, 36.5)
// let Cinderella4 = new Cinderella('Ylia', 21, 38)
// let Cinderella5 = new Cinderella('Monika', 20, 37)
// let Cinderella6 = new Cinderella('Kamila', 18, 37.5)
// let Cinderella7 = new Cinderella('Elza', 19, 36)
// let Cinderella8 = new Cinderella('Anna', 24, 38.5)
// let Cinderella9 = new Cinderella('Sofia', 27, 38)
// let Cinderella10 = new Cinderella('Alisa', 25, 39)
//
// let arrayCinderells = [Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10]
// let prince = new Prince('Ivan', 21, 36)
// prince.findCinderell(arrayCinderells)