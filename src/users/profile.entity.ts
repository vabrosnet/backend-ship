import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_profile' })
export class Profile {
    @PrimaryGeneratedColumn()   
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    mail: string;

    @Column({ type: 'date', nullable: true })
    birthdate: Date;
}