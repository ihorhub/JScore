//--створити масив та вивести його в консоль:
//
// - з 5 числових значень
//
// - з 5 стічкових значень

//let a = [1, 2, 3, 4, 5]
//console.log(a);
//let b = ['the', 'weather', 'is ', 'fine', 'today']
//console.log(b);

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let animals = [];
// animals[0] = 'cat';
// animals[1] = 'dog';
// animals[2] = 'bear';
// animals[3] = 'monkey';
// console.log(animals)

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     let text = ['the', 'weather', 'is', 'fine', 'today']
//     document.write('<div>', text, '</div>')}
// for (let i = 0; i < 10; i++) {
//      let text = ['the', 'weather', 'is', 'fine', 'today']
//     document.write('<div>', text, '</div>'+i)}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let text = ['the', 'weather', 'is', 'fine', 'today']
// let i = 0;
// while (i < 20) {
//     document.write('<h1>', text, '</h1>' + i)
//     i++}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
//     console.log(aElement)}
//     - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let b = ['the', 'weather', 'is ', 'fine', 'today','and','i', 'go','to','the','forest']
// for (let i = 0; i < b.length; i++) {
//     const bElement = b[i];
//     console.log(bElement)}
//
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, 'number', 321]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'boolean')
//         console.log(arrElement)// }


//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, 'number', 321]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'number')
//         console.log(arrElement)}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, 'number', 321]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'string')
//         console.log(arrElement)
// }
// //Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr =[]
// arr[0]=123
// arr[1]='123'
// arr[2]=true
// arr[3]='hello world'
// arr[4]=123 +'asd'
// arr[5]='false'
// arr[6]=4677
// arr[7]='number'
// arr[8]='qwe789'
// arr[9]=4645
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
//
// }

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(i)
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
// }
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2) {
//     console.log(i)
//     document.write(i+' ')
// }
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(i, ' ')
//     }
// }
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         console.log(i)
//         document.write(i, ' ')
//     }
// }
//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// for (let minutes = 0; minutes < 2; minutes++) {
//     for (let seconds = 0; seconds < 60; seconds++)
//         console.log(minutes, seconds)
// }


//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hours = 0; hours < 60; hours++) {
//     for (let minutes = 0; minutes < 60; minutes++)
//         for (let seconds = 0; seconds < 60; seconds++)
//             console.log(hours, minutes, seconds)}


//  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//

// let arr = ['a', 'b', 'c']
// let myWord = '';
//
// for (let i = 0; i < arr.length; i++) {
//     myWord += arr[i]
//
// }
// console.log(myWord)

// let arr = ['a', 'b', 'c']
// let myWord = ''
// let i = 0
// while (i < arr.length) {
//     myWord += arr[i]
//     i++
// }
// console.log(myWord)

// let arr = ['a', 'b', 'c']
// let myWord = '';
// for (const string of arr) {
//      myWord += string
//
// }
// console.log(myWord)


// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c']
// arr.push('1,2,3')
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
//
// }
// //Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let a = [1, 2, 3]
// a.unshift(4, 5, 6)
// console.log(a)

// //Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]

// let b=[1, 2, 3, 4, 5]
// console.log(b.slice(3))

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let b = [1, 2, 3, 4, 5]
// console.log(b.slice(0,2))

// створити пустий масив та :

//
//створити пустий масив та :
//
// 1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50 * 2; i += 2) {
//     arr.push(i)
// }
// console.log(arr)

//заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0,j=0 ; i< 50; j++) {
//     if (j % 2 !== 0) {
//         arr.push(j)
//     }
// }
// console.log(arr)
//используя Math.random заполнить массив из ???(сколько хотите) элементов.
//
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
// }
//
// let arr = []
// for (let i = 0; i < 800; i++) {
//     let answer = getRandomInt(8,732)
//     arr.push(answer)
// }
// console.log(arr)
// console.log(Math.random())

//вывести на консоль  каждый третий елемент


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }
//вывести на консоль  каждый третий елемент
//но при условии что его значение является парным.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//
//         console.log(arr[i])
//     }
// }
// вывести на консоль  каждый третий елемент
//
//  но при условии что он имеет непарное значение и
//
//  записать их в другой массив.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let a = []
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 !== 0) {
//         a.push(arr[i])
//
//     }
//
// }
// console.log(a)
