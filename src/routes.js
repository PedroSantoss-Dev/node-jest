import { Router } from "express";
import { userController } from "./controllers/userController.js";
import { data } from "./database.js";

const routes = Router();

routes.get("/", userController.getUser);

routes.post("/create", userController.createUser);

export { routes };
