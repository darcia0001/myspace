const userService= require('../services/userService'); 


exports.getAll= (req,res)=>{
    const list_users = userService.getAll();
    res.json(list_users);
}
exports.getById= (req,res)=>{
    const id= req.params.id;
    const data = userService.getById( id);
    res.json(data);
}

exports.create= (req,res)=>{
    const user= req.body;
    if( userService.notExist(user.login)){
        const data = userService.create(user);
        res.status(201).json(data);
    }else{
        res.status(400).json({"message": "user already exist with same login"});
    }
    
    
}

exports.update= (req,res)=>{
    const id= req.params.id
    const user= req.body;
    const data = userService.update(id, user);
    res.status(200).json(data);
}

exports.delete= (req,res)=>{
    const id= req.params.id
     userService.delete(id);
    res.sendStatus(204);
}