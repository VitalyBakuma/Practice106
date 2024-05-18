// У нас є об'єкт, у якому зберігаються зарплати
//    нашої команди
//    Напишіть код для підсумовування всіх зарплат і
//    збережіть його результат у змінній sum.
//    Якщо об'єкт salaries порожній, то результат має бути 0
const salaries = {
    Mango: 99,
    Poly: 160,
    Ajax: 80,
  };

  
function totalSalarie(salaries) {
    let sum = 0;
  let value = Object.values(salaries);
  for (const salarie of value) {
    sum += salarie;
  }
    return sum;
}
console.log (totalSalarie(salaries));

