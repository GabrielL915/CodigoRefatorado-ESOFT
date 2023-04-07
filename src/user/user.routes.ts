import { Router } from "express";

import userController from "./user.controller";

const userRoutes = Router();

userRoutes.get("/findall", userController.findAll);
userRoutes.get("/find/:id", userController.find);
userRoutes.post("/create", userController.create);
userRoutes.delete("/delete/:id", userController.delete);
userRoutes.put("/update/:id", userController.update);

export default userRoutes;