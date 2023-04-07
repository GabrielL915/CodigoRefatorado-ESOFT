import { Router } from "express";
import productController from "./product.controller";

const productRoutes = Router();

productRoutes.get("/findall", productController.findAll);
productRoutes.get("/find/:id", productController.find);
productRoutes.post("/create", productController.create);
productRoutes.delete("/delete/:id", productController.delete);
productRoutes.put("/update/:id", productController.update);


export default productRoutes;
