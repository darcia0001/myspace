
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
    content:string;

    @Column(
        {nullable:true}
    )
    date:Date;
} 