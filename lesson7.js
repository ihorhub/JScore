
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let hider = document.getElementById('hider');
let text = document.getElementById('text');
hider.onclick = hide()

function hide() {
   text.hidden = true;
}
