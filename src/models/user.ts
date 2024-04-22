
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User{
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
} 