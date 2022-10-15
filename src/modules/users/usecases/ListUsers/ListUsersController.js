import { ListUsersUseCase } from "./ListUsersUseCase.js";

export class ListUsersController {
    constructor() {
        this.ListUsersUseCase = new ListUsersUseCase
    }

    async handle(request, response) {
        /*O awaitoperador é usado para esperar por a Promisee obter seu valor de atendimento.
         Ele só pode ser usado dentro de uma função assíncrona ou de um módulo JavaScript .*/
        const users = await this.ListUsersUseCase.execute();

        console.log(users);
        return response.json(users);
    }
}