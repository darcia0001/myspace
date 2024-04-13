const express = require("express");
const bodyParser = require("body-parser");
const utilisateurRouter= require('./routers/utilisateurRoute');
const MessageRoute= require('./routers/MessageRoute');
require('dotenv').config()

// instatiation de l app
const app = express();
//config bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//brancher mes routes 
app.use('/utilisateurs', utilisateurRouter)
app.use('/messages', MessageRoute)



app.listen(process.env.PORT || 3000 );
console.log("Server started on port "+ process.env.PORT  || 3000);
