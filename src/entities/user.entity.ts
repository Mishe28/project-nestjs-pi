import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
//Entity, PrimaryGeneratedColumn, Column => DECORADORES
@Entity() 
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    address: string



}
