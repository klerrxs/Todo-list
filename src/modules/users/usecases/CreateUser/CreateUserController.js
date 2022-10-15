

import { CreateUserUseCase } from "./CreateUserUseCase.js";

export class CreateUserController {
    constructor() {
        this.CreateUserUseCase = new CreateUserUseCase();
    }

    handle(request, response) {
        const { name, username, email, password } = request.body

        const user = this.CreateUserUseCase.execute({ name, username, email, password})
     
        return response.json(user);
    }
}