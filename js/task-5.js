// Напишіть функцію, яка приймає рядок як аргумент
// і повертає новий рядок, в якому регістр кожного символу
//інвертовано(великі літери стають маленькими, а маленькі – великими)
function invertCase(message) {
    let newMessage = '';
    for (const messageLetter of message) {

        if (messageLetter === messageLetter.toUpperCase()) {
            newMessage += messageLetter.toLowerCase();
        } else {
            newMessage += messageLetter.toUpperCase();
        }

    }
    return newMessage;
}



console.log(invertCase("Hello World"));