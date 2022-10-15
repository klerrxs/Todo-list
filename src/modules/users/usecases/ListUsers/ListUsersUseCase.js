

import { UsersRepository } from "../../repositories/UserRepository.js";

export class ListUsersUseCase {
    constructor() {
        this.UsersRepository = UsersRepository.getInstance();
    }

    // A palavra-chave asyncantes de uma função faz com que a função retorne uma promessa:
    async execute() {
        const users = await this.UsersRepository.list();

        return users;
    }
}