//--створити масив та вивести його в консоль:
//
// - з 5 числових значень
//
// - з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//let a = [1, 2, 3, 4, 5]
//console.log(a);
//let b = ['the', 'weather', 'is ', 'fine', 'today']
//console.log(b);
// let c = ['the', 'weather', 'is ', 'fine', 'today',22,46,8,6,15,true,status,false]
// console.log(с);

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
//     document.write('<div>', text,'</div>'+[i])}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let text = ['the ', ' weather', ' is', ' fine', ' today']
// let i = 0;
// while (i < 20) {
//     document.write('<h1>', text, '</h1>' + [i])
//     i++
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
//     console.log(aElement)
// }

//     - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let words = ['the', 'weather', 'is ', 'fine', 'today','and','i', 'go','to','the','forest']
// for (let i = 0; i < words.length; i++) {
//     const wElement = words[i];
//     console.log(wElement)}
//
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let elementAnyType = [123, '333', true, 'false', 'hello world', 4444, false, 'number', 321, status]
// for (let i = 0; i < elementAnyType.length; i++) {
//     const arrElement = elementAnyType[i];
//     console.log(arrElement);
// }


//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, false, 'number', 321, status]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'boolean') {
//         console.log(arrElement)
//     }
// }

//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, false, 'number', 321, status]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'number')
//         console.log(arrElement)}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const arr = [123, '333', true, 'false', 'hello world', 4444, false, 'number', 321, status]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (typeof arrElement === 'string')
//         {console.log(arrElement)
// }
// }
// //Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
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
//     document.write(i+'')
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
//             if (seconds === 0 && minutes === 20 && hours === 2) {
//                 console.log(hours, minutes, seconds)
//
//
//             }
// }
// for (let hours = 0; hours < 2; hours++) {
//     for (let minutes = 0; minutes < 20; minutes++)
//         for (let seconds = 0; seconds < 60; seconds++)
//              console.log(hours, minutes, seconds)
//
// }
//

//  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//

// let arr = ['a', 'b', 'c'];
// let myWord = '';
// for (let i = 0; i < arr.length; i++) {
//     myWord = myWord + arr[i];
// }
// console.log(myWord)

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let myWord = '';
// let i = 0;
// while (i < arr.length) {
//     myWord += arr[i];
//     i++
// }
// console.log(myWord)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c']
// let myWord = '';
// for (const string of arr) {
//      myWord += string;
//
// }
// console.log(myWord)
//
//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c']
// let numberArr  = [1, 2, 3]
// for (let i = 0; i < numberArr.length; i++) {
//     const arrElement = numberArr[i];
//     arr.push(arrElement);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let a = [1, 2, 3];
// a[0] = 3;
// a [1] = 2;
// a [2] = 1;
// console.log(a);

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let a = [1, 2, 3];
// a.push(4,5,6);
// console.log(a);

// //Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let a = [1, 2, 3];
// a.unshift(4, 5, 6);
// console.log(a)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let x= ['js', 'css', 'jq'];
// document.write(x.shift())

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let x= ['js', 'css', 'jq'];
// document.write(x.pop())

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// let b=[1, 2, 3, 4, 5]
// console.log(b.slice())


//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let b = [1, 2, 3, 4, 5]
// console.log(b.slice(0,2))


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let b = [1, 2, 3, 4, 5]
// b.splice(1, 2);
// console.log(b)


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let b = [1, 2, 3, 4, 5]
// b.splice(3,0,'a','b','c')
// console.log(b)



// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let b = [1, 2, 3, 4, 5]
// b.splice(1,0,'a','b')
// b.splice(6,0,'c')
// b.splice(8,0,'e')
// console.log(b)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr=[10,15,2,46,99,123,888,196,100,11,]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arrElement%2===0){
//         console.log(arrElement)
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr=[10,15,2,46,99,123,888,196,100,11,];
// let array=[];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//    array.push(arrElement)
// }
// console.log(array);
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr=[10,15,2,46,99,123,888,196,100,11,];
// let array=[];
// for (let i = 0; i < arr.length; i++) {
//     array[i] = arr[i];
// }
// console.log(array)
// console.log(arr);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//let numbers=[2,17,13,6,22,31,45,66,100,-18];
// i=0
// while (i<numbers.length){
//     arrNumber=numbers[i]
//     i++
//     console.log(arrNumber)
// }
//     2. перебрати його циклом for
//let numbers=[2,17,13,6,22,31,45,66,100,-18];
// for (let j = 0; j < numbers.length; j++) {
//     const number = numbers[j];
//     console.log(number)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let numbers=[2,17,13,6,22,31,45,66,100,-18];
// i=0
// while (i<numbers.length) {
//     if (i%2!==0){
//         console.log(numbers[i]);
//     }
//     i++
//
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//let numbers=[2,17,13,6,22,31,45,66,100,-18];
// for (let j = 0; j < numbers.length; j++) {
//     if (j % 2 !== 0) {
//         console.log(numbers[j]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
// i=0
// while (i<numbers.length) {
//     arrNumber=numbers[i]
//     i++
//     if (arrNumber % 2 === 0) {
//         console.log(arrNumber);
//     }
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let numbers=[2,17,13,6,22,31,45,66,100,-18];
// for (let j = 0; j < numbers.length; j++) {
// const number = numbers[j]
//     if (number % 2 === 0) {
//         console.log(number)
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(numbers)
// for (let j = 0; j < numbers.length; j++) {
//     let number = numbers[j]
//     if (number % 3 === 0) {
//         number = 'okten'
//         numbers[j] = number
//     }
// }
// console.log(numbers)

// 8. вивести масив в зворотньому порядку.

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(numbers);
// let  newNumer=[];
// for (const number of numbers) {
// newNumer.unshift(number);
//
// }
// console.log(newNumer)


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)        // ??НЕ розумію цього завдання


// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// 1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50 * 2; i += 2) {
//     arr.push(i);
// }
// console.log(arr)

//заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i< 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
//  console.log(arr)




//используя Math.random заполнить массив из ???(сколько хотите) элементов.
//
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)    // ?? як поставити діапазон??? якщо в дужки МасРандом ставлю, то не рахує

// let arr = []
// for (let i = 0; i < 100; i++) {
//     let answer = Math.floor(Math.random()*1000)
//         arr.push(answer)
// }
// console.log(arr)


// 2. вывести на консоль  каждый третий елемент


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(arr)
// for (let i = 0; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(arr)
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//
//         console.log(arr[i])
//     }
// }
//
//
// // 4. вывести на консоль  каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(arr)
// let a = []
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         a.push(arr[i])
//     }
// }
// console.log(a)

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(arr)
// let a = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         a.push(arr[i - 1]);
//     }
// }
// console.log(a);


// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//

// let check = [100, 250, 50, 168, 120, 345, 188];
// console.log(check);
// let midlCheck = null;
// let sum = null;
// for (let i = 0; i < check.length; i++) {
//     sum += check[i]
//     midlCheck = Math.round(sum / check.length);
// }
// console.log(sum);
// console.log(midlCheck)



// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.