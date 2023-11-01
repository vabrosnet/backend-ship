import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ship_flag' })
export class Profile {
    @PrimaryGeneratedColumn()   
    id: number;

    @Column()
    flag: string;
}