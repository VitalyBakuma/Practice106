/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
     #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    };
    set clientData(key) {
        this.#login = key.login;
        this.#email = key.email;
    }
    get clientData() {
        return { login: this.#login, email: this.#email };
    }
} 

const client = new Client("mango", "mango@gmail.com");

// console.log(client.clientData)

client.clientData = { login: "cucumber", email: "cucumber@gmail.com" }
console.log(client.clientData)
