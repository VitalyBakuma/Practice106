/**
 *? Напишіть функцію updateObject, яка приймає об'єкт робить копію та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') {a: 1, c: 3}
 */
const obj = { a: 1, b: 2, c: 3 };

function updateObject(obj, nameKey) {
    const newObject = { ...obj };
    delete newObject[nameKey];
    return newObject;
}

console.log(updateObject(obj, 'b'));
console.log(obj);