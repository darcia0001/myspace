import { MessageController } from '../controllers/messageController';
import { UserController } from './../controllers/userController';
import express , { Router  } from 'express';
  
export class MessageRoutes{
    public router:Router;
    private msgController:MessageController; 
    constructor(){
    this.router= express.Router()
    this.msgController= new MessageController();
    this.configRoutes();
    }

    private configRoutes(){
        this.router.get('/',  this.msgController.getAll.bind(this.msgController));
        this.router.post('/',  this.msgController.create.bind(this.msgController));
        this.router.get('/:id',  this.msgController.getById.bind(this.msgController));
        this.router.put('/:id',  this.msgController.update.bind(this.msgController));
        this.router.delete('/:id',  this.msgController.delete.bind(this.msgController));

    }
}

 
