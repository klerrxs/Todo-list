
// todas as rotas do usuario, criação do usuario, listagem de usuario, ate auteticação de usuarios, iremos coloca em arquivos que detenha a responsibilidade de manter esses dados
import Router from "express";

const userRouters = Router();

import { createUserController } from "../modules/users/usecases/CreateUser/index.js"
import { listUsersController } from "../modules/users/usecases/ListUsers/index.js"

// Rota de criação de usuários
userRouters.post("/users", (request, response) => {
    return createUserController.handle(request, response);
});

//  Rota de listagem de usuários
userRouters.get("/users", (request, response) => {
    return listUsersController.handle(request, response);
})

export default userRouters;