import { Router } from "express";
import userRoutes from "./user/user.routes";
import productRoutes from "./products/product.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/products", productRoutes);


export default routes;
