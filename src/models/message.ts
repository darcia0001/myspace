
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    sender:string;

    @Column()
    receiver:string;
    
    @Column()
    conter:string;

    @Column()
    date:Date;
} 