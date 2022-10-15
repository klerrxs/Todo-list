

import Router from "express";
import userRouters from "../routes/UserRoutes.js";
const routes = Router();


routes.get("/", (request, response) => {
    response.status(200).json({
        message: "Batatinha",
    });
});

routes.use(userRouters);

export default routes;