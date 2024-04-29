import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../models/user";
import { AbstractService } from "./AbstractService";  

export class UserService  extends AbstractService<User> {
  private repo;
 
   constructor( repository: Repository<User>) { 
    super(repository) 
  } 
  async getUserFormDateBirth(date:Date): Promise<User[]> { 
    const list: User[] = await  this.repository.find({where:{dataNaissance:date}});
    
    return list;
  }
  
  
}
