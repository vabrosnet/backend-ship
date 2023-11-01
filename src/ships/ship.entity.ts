import { Entity, Column, DeleteDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
// import { Flag } from "./flag.entity";

@Entity({ name: 'ships' })
export class Ship {
    @PrimaryGeneratedColumn()   
    id: number;

    @Column()
    name: string;
    
    @Column({ nullable: true, unique: true })
    imoNumber: string;
    
    @Column({ nullable: true, unique: true })
    callSign: string;
    
    @Column({ nullable: true, unique: true })
    registration: string;
    
    @Column('decimal', { precision: 6, scale: 2 })
    lenghtOverall: number;
    
    @Column('decimal', { precision: 6, scale: 2 })
    beam: number;
    
    @Column('decimal', { precision: 6, scale: 2 })
    depth: number;
    
    @Column('decimal', { precision: 6, scale: 2 })
    draft: number;
    
    @Column({ nullable: true })
    netTonnage: number;
    
    @Column({ nullable: true })
    grossTonnage: number;
    
    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @DeleteDateColumn({ type: 'datetime' })
    deletedAt: Date;
}