const express = require('express');
const router = express.Router(); 

// GET /utilisateurs


router.get("/" , (req, res)=> {
    res.send("list des messages")
})

router.get("/:id" , (req, res)=> {
    res.send("message"+ req.params.id)
})

module.exports= router;