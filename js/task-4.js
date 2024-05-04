// Напишіть функцію сhekCase, яка приймає рядок, як аргумент і повертає true, якщо у цьому рядку зустрілась хочаб одна велика літера, якщо  ні то повертає false

// function сhekCase(message) {
//     for (let i = 0; i < message.length; i++){
//         if (message[i] === message[i].toUpperCase()) {
//             return true;
//         }
        
//     }
//     return false;
// }

// console.log(сhekCase('dsjcBbdbcdbvjh'));



function сhekCase(message) {
    for (const letter of message) {
        if (letter === letter.toUpperCase()) return true;
    }
    return false;
}

console.log(сhekCase("dsjcbNNdbcdbvjh"));
