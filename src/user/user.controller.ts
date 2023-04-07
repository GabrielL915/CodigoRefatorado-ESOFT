import { Request, Response } from "express";
import userService from "./user.service";

class UserController {
  public async create(req: Request, res: Response) {
    await userService.createUser(req.body);
    return res.status(201).send();
  }

  public async findAll(req: Request, res: Response) {
    const users = await userService.findAllUsers();
    return res.json(users);
  }
  public async find(req: Request, res: Response) {
    const user = await userService.findUser(req.params.id);
    return res.json(user);
  }
  public async delete(req: Request, res: Response) {
    const user = await userService.deleteUser(req.params.id);
    return res.json(user);
  }
  public async update(req: Request, res: Response) {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.json(user);
  }
}
export default new UserController();
