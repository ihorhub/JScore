
//1.присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// 2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// let greeting = 'hello'
// console.log(greeting)
// alert(greeting)
// document.write(greeting)
// let name = 'owu'
// console.log(name)
// alert(name)
// document.write(name);
// let domain = 'com'
// console.log(domain)
// alert(domain);
// document.write(domain)
// let  abbreviation = 'ua'
// console.log( abbreviation)
// alert(abbreviation)
// document.write(abbreviation)
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
// alert(tens)
// document.write(tens);


// 3.Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const x = 3;
// console.log(x);
// alert(x);
// document.write(x);
// const y = 'asd';
// console.log(y);
// alert(y);
// document.write(y);


//
//4 при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
//Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// let name = prompt('your name  Ihor ');
// console.log(name);
// alert(name);
// document.write(name);
// let surname = prompt('enter surname Babiy');
// console.log(surname);
// alert(surname);
// document.write(surname);
// let namesurname = prompt('enter namesurname Volodymyrovych');
// alert(namesurname);
// console.log(namesurname);
// document.write(namesurname);


//
//5.
// let person =name+surname+namesurname
//


// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let number = +prompt('enter 123')
// console.log(number)

//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let a = prompt('enter 123asd');
// let b = prompt('enter 3asd');
// let s = prompt('enter 4asd');
// let aParseint = parseInt(a);
// let bParseint = parseInt(b);
// let sParseint = parseInt(s);
// let result=aParseint+bParseint+sParseint;
// console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let aa = prompt('enter 123.456asd');
// let bb = prompt('enter 33.21asd');
// let cc = prompt('enter 49.311asd');
// let aparseFloat = parseFloat(aa);
// let bparseFloat = parseFloat(bb);
// let ccparseFloat = parseFloat(cc);
// let result=aparseFloat+bparseFloat+ccparseFloat;
// console.log(result);

//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let aaa = prompt('enter 123.456');
// let bbb = prompt('enter 33.21');
// let ccc = prompt('enter 49.311');
//  let aaaMR = Math.round(aaa);
// let bbbMR=Math.round(bbb);
// let cccMR = Math.round(ccc);
// let result=aaaMR+bbbMR+cccMR;
// console.log(result);

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
//     Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью.
//     При помощи Math.pow возвести первое число в степень второго числа.
// let a = +prompt('enter 2');
// let b = +prompt('enter 5');
// let pow=Math.pow(a,b)
// console.log(pow)



//12. При помощи оператора опредеоения типа typeof
// определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)


//13.- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// 5 < 6 -> true
// 5 > 6 -> false
// 5 = 6 -> false
// 5 == 6 -> false
// 10 = 10 -> true
// 10 >= 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
//
// 10 != 10 -> false
// 123 === '123' -> false
// 123 =='123' -> true


//14 Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false
//
// false
// les1.js:155 true
// les1.js:156 false
// les1.js:157 true
// les1.js:158 true
// les1.js:159 true
// les1.js:160 true
// les1.js:161 false
// les1.js:162 true
// les1.js:163 true
// les1.js:164 true
// les1.js:165 true
// les1.js:166 true
// les1.js:167 true
// les1.js:168 false
// les1.js:169 true
// les1.js:170 false


// //Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// let str = 'Привет'
// let num = 123
// let flag = true
// let txt = 'true'
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof txt)
//
// les1.js:197 string
// les1.js:198 number
// les1.js:199 boolean
// les1.js:200 string

//.16Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений
//поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

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

//Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//    let a6=5 % 3;
// console.log(a6);
//    let a7=3 % 5
// console.log(a7)
//   let a8=  5 + '3'
// console.log(a8)
//     let a9='5' - 3
// console.log(a9)
//    let a10= 75 + 'kg'
// console.log(a10)


// les1.js:227 2
// les1.js:229 3
// les1.js:231 53
// les1.js:233 2
// les1.js:235 75kg

//4.Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s
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

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n=3;
// let m=4
// let k=Math.pow(n,2)+Math.pow(m,2);
// console.log(k)

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world"
// document.write(str)
// console.log(str)
// alert(str)


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
// console.log(parseInt("3.14")) //3
// console.log(parseInt("-7.875")) //-7
// console.log(parseInt("435")) // 435
// console.log(parseInt("Вася")) // Nan
//
// les1.js:294 3
// les1.js:295 -7
// les1.js:296 435
// les1.js:297 NaN

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

//13 С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let x = prompt("Enter number", "Enter number")
// let y=prompt('Enter number')
// let sum=x+y
// alert(sum)

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

 // let name = prompt('your name ivan ');
 // let surname = prompt('enter surname ivanov');
 // let age = +prompt('enter age 32');
 // alert('Доброго вечера '+name+surname+ ' мои поздравления что вам '+ age)



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
// let isRoadClear = confirm('isRoadClear');
// console.log(isRoadClear);
// let color = prompt('color green, yellow, red');
// if (color === 'green' && isRoadClear) {
//     console.log('GO!')
// }
// else if  ('green'|| isRoadClear){
//     console.log('go after car')
//     } ;
// if (color === 'yellow' && isRoadClear) {
//     console.log('STOP!!');
// }
// else if  ('yellow'|| isRoadClear){
//     console.log('check it out all the time')
// }
// if (color === 'red' && isRoadClear) {
//     console.log('ALL time STOP!!!');
// }
// else if  ('red'|| isRoadClear){
//     console.log('stop and wait');
// }
// if (color===undefined|| isRoadClear){
//     console.log('do what you want');
//
// }
