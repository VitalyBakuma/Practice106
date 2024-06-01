// Угруповання об'єктів за якістю
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс. Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];

const courseArray = (array) => {
  const groupStudents = {};

  for (const student of array) {
    const key = student.course;
    if (!groupStudents[key]) {
      groupStudents[key] = [];
    }
    groupStudents[key].push(student);
  }

  console.log(groupStudents);
  return groupStudents;
};

courseArray(students);
