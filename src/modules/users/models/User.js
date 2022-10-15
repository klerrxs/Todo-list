
import { v4 as uuidV4 } from "uuid";

export class User {
    id;
    name;
    username;
    email;
    password;

    // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }

    }
}

const data = new User("ketleen ", "Romao");

console.log(data);