import supertest from "supertest";
import app from "../app";
import productService from "../products/product.service";

describe("Test product service get all products", () => {
  it("should get all products", async () => {
    const response = await supertest(app).get(`/products/findall`);
    expect(response.status).toBe(200);
  });
});

describe("Test product service create a product", () => {
  it("should create a product", async () => {
    const product: any = await productService.createProduct({
      name: "Coca-Cola",
      quantity: 20,
      price: 10,
    });
    const response = await supertest(app)
      .post(`/products/create`)
      .send(product);
    expect(response.status).toBe(201);
  });
});

describe("Test product service find a product", () => {
    it("should find a product", async () => {
        const product: any = await productService.createProduct({
        name: "Coca-Cola",
        quantity: 20,
        price: 10,
        });
        const response = await supertest(app).get(`/products/find/${product.id}`);
        expect(response.status).toBe(200);
    });
});

describe("Test product service update a product", () => {
    it("should update a product", async () => {
        const product: any = await productService.createProduct({
        name: "Coca-Cola",
        quantity: 20,
        price: 10,
        });
        const response = await supertest(app).put(`/products/update/${product.id}`).send(product);
        expect(response.status).toBe(200);
    });
});

describe("Test product service delete a product", () => {
    it("should delete a product", async () => {
        const product: any = await productService.createProduct({
        name: "Coca-Cola",
        quantity: 20,
        price: 10,
        });
        const response = await supertest(app).delete(`/products/delete/${product.id}`);
        expect(response.status).toBe(200);
    });
});