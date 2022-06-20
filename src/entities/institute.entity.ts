import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class institute {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    status: boolean

    @Column()
    rector: string

    @Column()
    phone: string

    @Column()
    web: string

    @Column()
    email: string

    //tipo instituto
    //zona
}