import { Entity, Column, DeleteDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()   
    id: number;

    @Column({ unique: true })
    username: string;
    
    @Column()
    password: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @DeleteDateColumn({ type: 'datetime' })
    deletedAt: Date;
}