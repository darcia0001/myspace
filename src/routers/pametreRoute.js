const express = require('express');
const router = express.Router(); 

// GET /utilisateurs

router.get("/" , (req, res)=> {
    res.send("list de parametres")
})

router.get("/:id" , (req, res)=> {
    res.send("parametre"+ req.params.id)
})

module.exports= router;