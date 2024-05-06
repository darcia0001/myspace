
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    firstname:string;

    @Column()
    lastname:string;
    
    @Column()
    login:string;

    @Column()
    password:string;

    @Column(
        {nullable:true}
    )
    dataNaissance:Date;
} 