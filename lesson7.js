
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
}