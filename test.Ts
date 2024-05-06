 
import  sqlite3 from "sqlite3";
const variable=10;
let db:  any;
db=  await new Promise((resolve, reject)=>{
    new sqlite3.Database(process.env.SLQLITE_DB || 'myspace.db' , (err)=>{
        if(err){
            reject(err);
        }else{
            resolve(this);     
        }
    })
    
}) 

 
db.run(`create table if not exists
                users (id integer PRIMARY KEY AUTOINCREMENT ,
                        firstname TEXT,
                        lastname TEXT, 
                        login TEXT,
                        password TEXT, 
                        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                ) `)


            

