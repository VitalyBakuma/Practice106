/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const btn = document.querySelector('#swapButton');
const leftInput = document.querySelector('#leftSwapInput');
const rightInput = document.querySelector('#rightSwapInput');

btn.addEventListener('click', () => {
    let varRight = rightInput.value;
rightInput.value = leftInput.value;
leftInput.value = varRight;
})