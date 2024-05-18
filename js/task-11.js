// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
       return  this.a + this.b;
    },
    multiply(){return this.a * this.b;},
}

// console.log(calculator);
console.log(calculator.read(10, 5));
console.log(calculator.sum());
console.log(calculator.multiply())

const array = [];
if (!array.length) console.log("empty");

const obj = {};
if (!Object.keys(obj).length) console.log("empty");
