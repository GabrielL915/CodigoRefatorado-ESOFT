import productService from "./product.service";
import { Request, Response } from "express";

class ProductController {
  public async create(req: Request, res: Response) {
    await productService.createProduct(req.body);
    return res.status(201).send();
  }

  public async findAll(req: Request, res: Response) {
    const products = await productService.findAllProducts();
    return res.json(products);
  }

  public async find(req: Request, res: Response) {
    const product = await productService.findProduct(req.params.id);
    return res.json(product);
  }

  public async delete(req: Request, res: Response) {
    const product = await productService.deleteProduct(req.params.id);
    return res.json(product);
  }

  public async update(req: Request, res: Response) {
    const product = await productService.updateProduct(req.params.id, req.body);
    return res.json(product);
  }
}

export default new ProductController();
