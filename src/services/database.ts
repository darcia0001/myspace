import sqlite3 from "sqlite3";
import { AppDataSource } from "../data-source"
import { User } from "../models/user";

export class Database {
  db: sqlite3.Database;
  constructor() {
        AppDataSource.initialize().then(async () => {

                
            
                console.log(" Type ORM workds and init well the db.")
            
            }).catch(error => console.log(error))
  }
  private createTable() {
    // mignations
    this.db.run(
      `create table if not exists
                users (id integer PRIMARY KEY AUTOINCREMENT ,
                        firstname TEXT,
                        lastname TEXT,
                        login TEXT,
                        password TEXT, 
                        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                ) `,
      (err) => {
        if (err) {
          console.error("Error creating table ", err);
        } else {
          console.error("table created successfully or already exist ");
        }
      }
    );
  }

  public query(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
