//1.присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// 2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// let greeting = 'hello'
// console.log(greeting)
// let name = 'owu'
// console.log(name)
// let domain = 'com'
// console.log(domain)
// let  abbreviation = 'ua'
// console.log( abbreviation)
// let z = 1
// console.log(z)
// let x = 10
// console.log(x)
// let a = -999
// console.log(a)
// let b = 123
// console.log(b)
// let p = 3.14
// console.log(p)
// let c = 2.7
// console.log(c)
// let y = 16
// console.log(y)
// let bol = true
// console.log(bol)
// let string = false
// console.log(string)
// let tens = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
// document.write(tens);


// 3.Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const x = 3
// console.log(x);
// const y = 'asd'
// console.log(y)


//
//4 при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// let name = prompt('your name  Ihor );
// console.log(name)
// let surname = prompt('enter surname Babiy')
// console.log(surname)
// let namesurname = prompt('enter namesurname Volodymyrovych')
// console.log(namesurname)
// document.write(name + surname + namesurname)


//
//5.
// let person =name+surname+namesurname
//
//


//6.7.8.9.10.11
// let number = +prompt('enter 123')
// console.log(number)
// let s = '123asd'
// let resultOfParseint = parseInt(s);
// console.log(resultOfParseint)
// let d = '123.456asd'
// let result = parseFloat(d);
// console.log(result)
// let x = 456.987
// let result = Math.round(x)
// console.log(result)


//12.
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)


//13.
//5 < 6 -> true
//5 > 6 -> false
//5 = 6 -> false
//5 == 6 -> false
//10 = 10 -> true
//10 >= 10 -> true
//10 > 10 -> false
//10 < 10 -> false
//
//10 != 10 -> false
//123 === '123' -> false
//123 =='123' -> true


//14
//console.log(132 > 100 && 45 < 12 ); // false
//console.log(34 > 33 && 23 < 90 ); // true
//console.log(99 > 100 && 45 > 12 ); // false
//console.log(132 > 100 || 45 < 12 ); // true
//console.log(111 > 11 || 45 < 111 ); // true
//console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
//console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
//console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
//console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
//console.log(!!'-1'); // true
//console.log(!!-1); // true
//console.log(!!'0'); // true
//console.log(!!'null'); // true
//console.log(!!'undefined'); // true
//console.log(!!(3/'owu')); // false
//console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
//сonsole.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false


//15.
// let a = 'Привет'
// let c = 123
// let y = true
// let f = 'true'
// console.log(typeof a)
// console.log(typeof c)
// console.log(typeof y)
// console.log(typeof f)


//.16
// let a1 = 5 - 3
// console.log(a1)
// let a2 = 5 + 3
// console.log(a2)
// let a3 = 5 * 3
// console.log(a3)
// let a4 = 5 / 3
// console.log(a4)
// console.log(a1)
// let a5 = 5 % 3
// console.log(a5)
// let a6 = 5 + '3'
// console.log(a6)
// let a7 = '5' - 3


//4.
// let height = 23
// let width = 10
// let s = height * width
// console.log(s)

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
// let heightC = 10
// let dc = 4
// let R = dc / 2
// let PI = 3.14
// let v = PI * R * R * heightC
// console.log(v)


//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world"
// document.write(str)
// console.log(str)


//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//Вывести в документ содержимое переменной concatenation спомощью
// let str1 = 'Кто'
// let str2 = 'ти'
// let str3 = 'такой?'
// document.write(str1, ' ', str2, ' ', str3)


//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //205
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); //40
// document.write(str / 2 + "<br/>"); //10


//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14") //3
// parseInt("-7.875") //7
// parseInt("435") // 435
// parseInt("Вася") // undifinded


//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код
// let str = prompt("Enter something", "ho-ho")
// console.log(str);


// 3 Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь".
// let answer = confirm('машин нет?');
// console.log(answer);
// let color = prompt('color green, yellow, red');
// if (color === 'green' && answer) {
//     console.log('GO!')
// } else if (color === 'yellow') {
//     console.log('подожди пока нарушители проедут')
// } else if (color === 'red') {
//     console.log('жди')
// }
