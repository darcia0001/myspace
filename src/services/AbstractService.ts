import { DeepPartial, FindOptions, FindOptionsWhere, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
export  abstract class AbstractService<T> {
  protected repository: Repository<T>;
   
  constructor( repository: Repository<T>) {
    this.repository = repository;
  }

  async getAll(filter: FindOptionsWhere<T>): Promise<T[]> { 
    const list: T[] = await  this.repository.find({where:filter});
    
    
    return list;
  }
  async getById(filter: FindOptionsWhere<T>): Promise<T> {
    const data: T =  await this.repository.findOneBy(filter);
    return data;
   
  }

  async notExist(filter: FindOptionsWhere<T>): Promise<boolean> {
    console.log(filter)
    const data= await this.repository.find(
      {where:filter}
    )
    console.log(data)
    if (data.length <=0){
      return true
    }
    else{
      return false;
    } 
  }

  async create(data: DeepPartial<T>): Promise<T> {
   const result= await this.repository.save(data)

    //newUser.id = result.lastId;
    return result;
  }
  async delete(id: number): Promise<any> {
    const result: any = await this.repository.delete(id)
    return result;
  }
  async update(filter: FindOptionsWhere<T>, data:  QueryDeepPartialEntity<T>): Promise<T | undefined> {
      await this.repository.update(filter,data)
      return  this.repository.findOne(filter)
 
  }
  
  
}
