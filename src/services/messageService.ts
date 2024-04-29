import { Repository } from "typeorm";
import { AppDataSource } from "../data-source"; 
import { AbstractService } from "./AbstractService";
import { Message } from "../models/message";



export class MessageService  extends AbstractService<Message> {
 
  constructor( repository: Repository<Message>) { 
    super(repository)
  } 
  
}
