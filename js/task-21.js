/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btn = document.querySelector("#passwordButton");
const input = document.querySelector("#passwordInput");

btn.addEventListener('click', hadlerClick);

function hadlerClick(evt) {
    if (input.type === 'password') {
        evt.target.textContent = "Приховати";
        input.type = 'text';
        return;
    }
    evt.target.textContent = "Розкрити";
    input.type = 'password';
    
}