/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */

const time = 145;
function convertTime(time) {
  const hour = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (time % 60).toString().padStart(2, "0");
  return `${hour}:${minutes}`;
}
console.log(convertTime(140));
console.log(convertTime(280));
console.log(convertTime(70));
console.log(convertTime(90));
