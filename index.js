const express = require('express')
var bodyParser = require('body-parser')
const path= require('path')
const app = express()

app.use(express.static(path.join(__dirname,'static')));
app.use( bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/static/:filename', function (req, res) {
    console.log("valeur du params  ",req.params )
    console.log("valeur du query  ",req.query )
    console.log("valeur du body  ",req.body )
    console.log("valeur du header  ",req.headers )

    res.sendFile(path.join(__dirname,'static',req.params.filename));

})
app.get('/', function (req, res) {
   const  contenuHtml= `
   <html>
    <head> 
        <title>Notre server </title>
    </head>
    <body>
    <div>
        <h1> Hello World!!!</h1>
    </div>
    
    </body>
   </html>
   `
   const contenuJson=`
   {
    'message': 'helloworld'
   }
   `
   //res.set('Content-Type', 'text/html');
   res.set('Content-Type', 'application/json');
   res.set('Server', 'Myspace Server');

    res.status(201).send(contenuJson)
});

app.listen(3000); 
console.log("Server started on port 3000")