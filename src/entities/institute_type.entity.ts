import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class InstituteType {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
