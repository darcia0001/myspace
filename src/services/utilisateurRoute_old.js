const express = require('express');
const router = express.Router(); 
const db = require("../db");
const pametreRoute= require('./pametreRoute');
const { json } = require('body-parser');

// GET /utilisateurs
function callbackGetUser(req, res, rows){
    console.log("rows", rows)
    res.set("Content-Type", "application/json");
    res.set("Server", "Myspace Server");
    res.status(200).send(rows);
}
router.use('/:id/parametres', pametreRoute)

router.get("/:id" , (req, res)=> {
    res.send("user"+ req.params.id)
})

router.get("/" , (req, res)=> {
    db.all("SELECT *  FROM users", (err,rows)=>{
        callbackGetUser(req,res,rows);
      })
})

router.post("/", function (req, res) {
    const data = req.body;
    userJson = data;
    console.log("data from client", data);
    /*
      const stmt= db.prepare("insert into users(firstname,lastname,login,password) values(?,?,?,?)");
      const statement_query_value=data.firstname+", "+data.lastname+" ," +data.login+   ", " +data.password
      console.log("statement_query_value",statement_query_value)
      stmt.run(statement_query_value );
      stmt.finalize();
      */
    const sql = `INSERT INTO users(firstname,lastname,login,password) VALUES ('${data.firstname}','${data.lastname}','${data.login}','${data.password}')`;
    console.log("sql", sql);
    db.exec(sql, function (err) {
      if (err) {
        return console.error(err.message);
      }
      // Récupérer l'ID de la dernière insertion
      console.log(`A row has been inserted with id ${this.lastID} ${err}`);
      userJson.id = this.lastID;
      res.set("Content-Type", "application/json");
      res.set("Server", "Myspace Server");
  
      res.status(201).send(userJson);
    });
  });







module.exports= router;


function response(req, res, rows){
 const obj= {
  "name":khoussa
 }
  res.set("Content-Type", "application/json"); 
  res.status(200).send(JSON.stringify(obj));
}

function response2(req, res, rows){
  const obj= {
   "name":khoussa
  }
  
   res.status(200).json(obj);
 }