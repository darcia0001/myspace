import { AppDataSource } from "../data-source";
import { User } from "../models/user";
import { Database } from "./database";


export class UserService {
  private db: Database;
  constructor() {
    this.db = new Database();
  }

  async getAll(): Promise<User[]> {
    const users: User[] = await AppDataSource.manager.find(User);
    return users;
  }
  async getById(id: number): Promise<User> {
    const user: User =  await AppDataSource.manager.findOneBy(User,{id:id,firstname:"",lastname:''})
    //const user2:User= await  this.db.query(`SELECT * FROM users where id=${id}`);
    //const user3:User= await  this.db.query("SELECT * FROM users where id="+id);
   
      return user;
   
  }

  async notExist(login: string): Promise<boolean> {

    const user= await AppDataSource.manager.findOneBy(User,{
      login:login
    })
    if (user!==undefined){
      return true
    }
    else{
      return false;
    } 
  }

  async create(newUser: User): Promise<User> {
   const result= await AppDataSource.manager.save(newUser)

    //newUser.id = result.lastId;
    return result;
  }
  async delete(id: string): Promise<any> {
    const result: any = await this.db.query("DELETE   FROM users where id=?", [
      id,
    ]);
    return result;
  }
  async update(user: User): Promise<User> {
    const result = await this.db.query(
      "UPDATE   users   SET  firstname=? , lastname=?   where id = ?",
      [user.firstname, user.lastname, user.id]
    );
    return result;
  }
  /*async resetPassword(user:User, newPassword) : Promise <User> {
    const result= await this.db.query("UPDATE  FROM  users where id = ? SET  firstname=? , lastname=? ", [newUser.firstname,newUser.lastname,newUser.login, newUser.password]);
 
  }*/
}
