

import { User } from "../models/User.js";

export class UsersRepository {
    users;

    // Essa funcionalidade se torna um Atributo static
    static INSTANCE;

    constructor() {
        this.users = [];
    }

    static getInstance() {
        if(!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, username, email, password }) {
        const user = new User();

        Object.assign(user, {
            name,
            username,
            email,
            password,
            created_at: new Date(),
        });

        this.users.push(user);

        return user;
    }

    list() {
        return this.users;
    }
}