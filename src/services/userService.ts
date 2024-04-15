import { User } from "../models/user";
import { Database } from "./database";
export class UserService {
  private db: Database;
  constructor() {
    this.db = new Database();
  }

  async getAll(): Promise<User[]> {
    const users: User[] = await this.db.query("SELECT * FROM users");
    return users;
  }
  async getById(id: string): Promise<User> {
    const users: User[] = await this.db.query("SELECT * FROM users where id=?", [
      id,
    ]);
    //const user2:User= await  this.db.query(`SELECT * FROM users where id=${id}`);
    //const user3:User= await  this.db.query("SELECT * FROM users where id="+id);
    if (users.length>0){
      return users[0]
    } 
    return null;
  }

  async notExist(login: string): Promise<boolean> {
    const users: User[] = await this.db.query(
      "SELECT * FROM users where login=?",
      [login]
    );
    return users.length === 0;
  }

  async create(newUser: User): Promise<User> {
    const result = await this.db.query(
      "INSERT INTO users(firstname,lastname,login,password) VALUES (?,?,?,?)",
      [newUser.firstname, newUser.lastname, newUser.login, newUser.password]
    );
     
    //newUser.id = result.lastId;
    return newUser;
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
      [ user.firstname, user.lastname, user.id]
    );
    return result;
  }
  /*async resetPassword(user:User, newPassword) : Promise <User> {
    const result= await this.db.query("UPDATE  FROM  users where id = ? SET  firstname=? , lastname=? ", [newUser.firstname,newUser.lastname,newUser.login, newUser.password]);
 
  }*/
}
