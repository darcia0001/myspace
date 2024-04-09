const sqlite3 = require('sqlite3').verbose();

const db= new sqlite3.Database('myspace.db');

db.serialize(()=>{
    db.run(`create table if not exists
            users (id integer PRIMARY KEY AUTOINCREMENT ,
                firstname TEXT,
                lastname TEXT,
                login TEXT,
                password TEXT, 
                create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) `);
})
module.exports=db;
