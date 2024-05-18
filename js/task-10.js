// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function newArray(fruits) {
  const newCopy = [];
  for (const fruit of fruits) {
    const newFruits = { ...fruit };
    newFruits.price = newFruits.price * 0.8;
    newFruits.id = Math.random();
    newCopy.push(newFruits);
  }
  return newCopy;
}

console.log(newArray(fruits));
