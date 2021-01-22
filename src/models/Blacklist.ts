import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blacklist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    jwt: string;
    
}