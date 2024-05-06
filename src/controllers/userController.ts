import { AppDataSource } from "../data-source";
import { Publication } from "../models/publication";
import { User } from "../models/user";
import { PublicationService } from "../services/publicationService";
import { UserService } from "../services/UserService";
import { Request, Response } from "express";

export class UserController {
  private userService: UserService;
  constructor() {
    AppDataSource.initialize().then(async () => {

      this.userService = new UserService(AppDataSource.getRepository(User));   
            
      console.log(" Type ORM workds and init well the db.")
  
  }).catch(error => console.log(error)) ;
    
  }

  async getAll(req: Request, res: Response) {
    try {
      console.log("here>")
      const list_users = await this.userService.getAll({});
      
      console.log("result , call", list_users);
      res.json(list_users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const user = await this.userService.getById({id:Number(req.params.id)} );
      if (user){
        res.json(user);  
      }else{
        res.sendStatus(404);
      }
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    console.log("---> create ")
    const { firstname, lastname, login, password } = req.body;
    if (
      firstname === undefined ||
      lastname === undefined ||
      login === undefined ||
      password === undefined
    ) {
      res.status(400).json({ message: "body not match contract " });
    } else {
      try {
        console.log("---> search ", login)
        const UserNotExist = await this.userService.notExist({login:login});
        console.log("UserNotExist",UserNotExist)
        if (UserNotExist) {
          const user: User = new User();
          user.firstname=firstname;
          user.lastname=lastname;
          user.login=login;
          user.password=password;
          const data = await this.userService.create(user);
          res.status(201).json(data);
        } else {
          res.status(400).json({ message: "user already exist " });
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user: User = req.body;
      user.id = Number(req.params.id)  ;
      const data = await this.userService.update({id:user.id}, user);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this.userService.delete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
