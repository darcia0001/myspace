import { UserRoutes } from './routers/utilisateurRoute';
 
import express  from 'express';
import bodyParser  from 'body-parser'; 
require('dotenv').config()

// instatiation de l app
const app = express();
//config bodyparser *optionel ; express l embarque par defaut
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes= new UserRoutes()
//brancher mes routes 
app.use('/utilisateurs', userRoutes.router)
 
if(false){
    console.log("hello")
}



app.listen(process.env.PORT || 3000 );
console.log("Server started on port "+ process.env.PORT  || 3000);
