/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const decBtn = document.querySelector('#decrease')
const incBtn = document.querySelector('#increase')
const box = document.querySelector('#box')
// console.log(getComputedStyle(box).width, getComputedStyle(box).height);
let width = parseInt(getComputedStyle(box).width);
let height = parseInt(getComputedStyle(box).height);
// console.log(typeof parseInt(getComputedStyle(box).width))
decBtn.addEventListener("click", () => {
    width -= 10;
    height -= 10;
box.style.width = `${width}px`;
box.style.height = `${height}px`;
})

incBtn.addEventListener("click", () => {
    width += 10;
    height += 10;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    })