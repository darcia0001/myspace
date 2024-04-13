 
import express  from 'express';
import bodyParser  from 'body-parser'; 
import router from './routers/utilisateurRoute' ;
require('dotenv').config()

// instatiation de l app
const app = express();
//config bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//brancher mes routes 
app.use('/utilisateurs', router)
 




app.listen(process.env.PORT || 3000 );
console.log("Server started on port "+ process.env.PORT  || 3000);
