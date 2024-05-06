
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Publication{
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    user:number;

    @Column()
    message:string;
    
} 