import { userService } from "../services/userService";
import { Request, Response } from "express";

export const userController = {
  getAll(req: Request, res: Response) {
    const list_users = userService.getAll();
    res.json(list_users);
  },

  getById(req: Request, res: Response) {
    const id = req.params.id;
    const data = userService.getById(id);
    res.json(data);
  },

  create(req: Request, res: Response) {
    const { firstname, lastname, login, password } = req.body;
    if (
      firstname === undefined ||
      lastname === undefined ||
      login === undefined ||
      password === undefined
    ) {
      res.status(400).json({ message: "body not match contract " });
    } else {
      if (userService.notExist(login)) {
        const user = { firstname, lastname, login, password };
        const data = userService.create(user);
        res.status(201).json(data);
      } else {
        res.status(400).json({ message: "user already exist with same login" });
      }
    }
  },

  update(req: Request, res: Response) {
    const id = req.params.id;
    const user = req.body;
    const data = userService.update(id, user);
    res.status(200).json(data);
  },

  delete(req: Request, res: Response) {
    const id = req.params.id;
    userService.delete(id);
    res.sendStatus(204);
  },
};
