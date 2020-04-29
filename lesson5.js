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
function Tag(titleOfTag, action, attrs) {
    this.titleOfTag=titleOfTag
    this.action=action
    this.attrs=attrs

}
let title='<a>'
let action ='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.'
let attibytes=[
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'},
]
let a= new Tag(title,action,attibytes)
console.log(a)