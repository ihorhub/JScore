
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// document.getElementById('hider').onclick = function () {
//     document.getElementById('text').hidden = true;
// }
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// document.getElementById('hider').onclick = function () {
//     this.style.display = 'none'
// }

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//<input id="number" type="number" value=" введіть тут скільки вам років ">
// let age = document.form1.age
// let submit = document.form1.button
// submit.onclick = function () {
//     if (age.value > 18) {
//         alert('вхід дозволено')
//     } else {
//         alert('неповнолітнім вхід заборонений')
//
//     }
//
// }


// navigator.mediaDevices.getUserMedia({video: true}).then(videoStream => {
//     let video = document.getElementById('videoblock')
//     video.srcObject = videoStream
//     video.play()
// })