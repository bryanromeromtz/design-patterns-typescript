import express from "express";

import { UserController } from "../infrastructure/controllers/user-controller";
import { UserService } from "../application/services/UserService";
// import { UserRepository } from "../domain/repositories/UserRepository";
import { UserRepositoryImp } from "../infrastructure/repositories/persistence/UserRepositoryImp";

// Server Routing
const userRouter = express.Router();

// dependencies
const userRepository = new UserRepositoryImp();
const userService = new UserService(userRepository);

// Controller
const userController = new UserController(userService);

userRouter.get("/:id", userController.run.bind(userController));

export { userRouter };
