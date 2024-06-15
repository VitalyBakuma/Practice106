/*
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

const input = document.querySelector(".contactsFilter");
const contacts = document.querySelector(".contacts");

const items = [...contacts.children];

input.addEventListener('input', (evt) => {
    let value = input.value.toLowerCase();
    const newArr = items.filter(item => {
       return item.textContent.toLowerCase().includes(value);
    })
    console.log(newArr);

    contacts.innerHTML = '';
    contacts.append(...newArr);
})