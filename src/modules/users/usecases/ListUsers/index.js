import { UsersRepository } from "../../repositories/UserRepository.js";
import { ListUsersUseCase } from "./ListUsersUseCase.js";
import { ListUsersController } from "./ListUsersController.js";

const usersRepository = UsersRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };