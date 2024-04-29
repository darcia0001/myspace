import sqlite3 from "sqlite3";
import { AppDataSource } from "../data-source"
import { User } from "../models/user";

export class Database { 
  constructor() {
        AppDataSource.initialize().then(async () => {

                
            
                console.log(" Type ORM workds and init well the db.")
            
            }).catch(error => console.log(error))
  }
 

   
}
