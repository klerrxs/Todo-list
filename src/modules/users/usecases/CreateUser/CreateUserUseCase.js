// Use Case é responsável pelas regras de negócio da nossa aplicação

import { UsersRepository } from "../../repositories/UserRepository.js";


export class CreateUserUseCase {
    constructor() {
        this.usersRepository = UsersRepository.getInstance();

    }

    // Executa as regras do meu useCase que tou te pedindo
    execute({ name, username, email, password }) {
        // Não posso ter o mesmo username que outro usuário
        // Não posso ter o mesmo e-mail que outro usuário


        const user = this.usersRepository.create({ name, username, email, password });

        return user;
    }
}