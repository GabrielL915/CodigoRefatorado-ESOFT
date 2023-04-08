import supertest from "supertest";
import app from "./app";

const request = supertest(app);

describe("Test server", () => {
  it("should return a 200 status code", async () => {
    const response = await request.get("/products/findall");
    expect(response.status).toBe(200);
  });
});
