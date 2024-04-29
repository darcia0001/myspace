import { Repository } from "typeorm";
import { AppDataSource } from "../data-source"; 
import { AbstractService } from "./AbstractService"; 
import { Publication } from "../models/publication";

export class PublicationService  extends AbstractService<Publication> {
 
  constructor( repository: Repository<Publication>) { 
    super(AppDataSource.getRepository(Publication))
  } 
  
}
