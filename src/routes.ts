import { Router } from "express";
import { UserController } from "./controllers/userController";

const routes = Router();
const userController = new UserController();

routes.get("/", userController.getUser);

routes.post("/create", userController.createUser);

export { routes };
