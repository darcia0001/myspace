import { AppDataSource } from "../data-source";
import { Message } from "../models/message";
 import { MessageService } from "../services/messageService";
  import { Request, Response } from "express";

export class MessageController {
  private MessageService: MessageService;
  constructor() {
    AppDataSource.initialize().then(async () => {

      this.MessageService = new MessageService(AppDataSource.getRepository(Message));   
            
      console.log(" Type ORM workds and init well the db.")
  
  }).catch(error => console.log(error)) ;
    
  }

  async getAll(req: Request, res: Response) {
    try {
      console.log("here>")
      const list_users = await this.MessageService.getAll({});
      
      console.log("result , call", list_users);
      res.json(list_users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const user = await this.MessageService.getById({id:Number(req.params.id)} );
      if (user){
        res.json(user);  
      }else{
        res.sendStatus(404);
      }
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    console.log("---> create ",req.body)
    const { sender, receiver, content, date } = req.body;
    if (
      sender === undefined ||
      receiver === undefined ||
      content === undefined ||
      date === undefined
    ) {
      res.status(400).json({ message: "body not match contract " });
    } else {
      try {
        console.log("---> search ", )
         
         
          const message: Message = new Message();
          message.sender=sender;
          message.receiver=receiver;
          message.content=content;
          message.date=date;
          const data = await this.MessageService.create(message);
          res.status(201).json(data);
        
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const message: Message = req.body;
      message.id = Number(req.params.id)  ;
      const data = await this.MessageService.update({id:message.id}, message);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await this.MessageService.delete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
