import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column({
        default: '[]'
    })
    books: string;
    
}