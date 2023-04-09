import supertest from "supertest";
import app from "../app";
import userService from "../user/user.service";

describe("Test user service get all users", () => {
  it("should get all users", async () => {
    const response = await supertest(app).get(`/users/findall`);
    expect(response.status).toBe(200);
  });
});

describe("Test user service create a user", () => {
  it("should create a user", async () => {
    const user: any = await userService.createUser({
      email: "teste@testmail.com",
      firstName: "João",
      lastName: "Dias",
      age: 20,
    });
    const response = await supertest(app).post(`/users/create`).send(user);
    expect(response.status).toBe(201);
  });
});

describe("Test user service find a user", () => {
  it("should find a user", async () => {
    const user: any = await userService.createUser({
      email: "teste@testmail.com",
      firstName: "João",
      lastName: "Dias",
      age: 20,
    });
    const response = await supertest(app).get(`/users/find/${user.id}`);
    expect(response.status).toBe(200);
  });
});


describe("Test user service update a user", () => {
  it("should update a user", async () => {
    const user: any = await userService.createUser({
      email: "teste@testmail.com",
      firstName: "João",
      lastName: "Dias",
      age: 20,
    });
    const response = await supertest(app).put(`/users/update/${user.id}`).send(user);
    expect(response.status).toBe(200);
  });
});

describe("Test user service delete a user", () => {
  it("should delete a user", async () => {
    const user: any = await userService.createUser({
      email: "teste@testmail.com",
      firstName: "João",
      lastName: "Dias",
      age: 20,
    });
    const response = await supertest(app).delete(`/users/delete/${user.id}`);
    expect(response.status).toBe(200);
  });
});