import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/user"
import { Message } from "./models/message"
import { Publication } from "./models/publication"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "passer",
    database: "edacydb",
    synchronize: true,
    logging: false,
    
    entities:[User, Message, Publication], //["src/models/*.ts"],
    migrations: [],
    subscribers: [],
})
