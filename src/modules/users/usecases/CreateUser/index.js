// Na onde vou reunir todas as minhas informaçoes para passa para meu soft

import { UsersRepository } from "../../repositories/UserRepository.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";
import { CreateUserController } from "./CreateUserController.js";


const usersRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };