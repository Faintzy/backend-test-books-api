import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { isbn } from '@phuocng/fake-numbers';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: isbn.fake()
    })
    isbn: string;

    @Column()
    title: string;

    @Column()
    author: string;

}