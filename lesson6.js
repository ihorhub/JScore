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
// завтра при можливості допишу інші завдання, там ніби те саме..