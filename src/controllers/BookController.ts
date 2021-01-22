import { Request, Response } from "express";
import { createConnection, createQueryBuilder, getConnection, getRepository } from 'typeorm';
import { User } from "../models/User";
import { Book } from '../models/Book';
import { Author } from "../models/Author";
import { decodeJWT } from '../utils/jwt';

export const getBookById = async (request: Request, response: Response) => {

    const { id } = request.params;
    const token = request.header('authorization');

    var values;

    try {
        values = decodeJWT(token);
    } catch (error) {
        response.status(401).json({
            success: false,
            msg: error.message
        });
    }

    const book = await getRepository(Book).findOne(id);
    const user = await getRepository(User).findOne(values.id);
    var mybooks = JSON.parse(user.books);

    if (mybooks.includes(parseInt(id))) {

        return response.status(200).json({
            success: true,
            msg: book
        });

    } else if (values.role == "manager") {

        return response.status(200).json({
            success: true,
            msg: book
        });

    } else {

        return response.json({
            success: false,
            msg: "You not have permission to see this book"
        });

    }
    
}

export const createBook = async (request: Request, response: Response) => {

    const token = request.header('authorization');

    if (token) {

        var values;

        try {
            values = decodeJWT(token);
        } catch (error) {
            response.status(401).json({
                success: false,
                msg: "Expired or invalid jwt"
            });
        }

        const res = await getRepository(Book).save(request.body);
        const user = await getRepository(User).findOne(values.id);

        var userBooks: Array<any> = JSON.parse(user.books);
        userBooks.push(res.id);
    
        if (res) {

            await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({
                    books: JSON.stringify(userBooks)
                })
                .where("id = :id", {
                    id: values.id
                })
                .execute();
            
            await getRepository(Author).save({
                name: user.name,
                email: user.email
            });

            return response.status(201).json({
                success: true,
                msg: res
            });

        } else {
            return response.json({
                success: false,
                msg: "An error was ocurred, book not created"
            });
        }

    } else {
        return response.json({
            success: false,
            msg: "Authorization token not provided"
        });
    }

}

export const deleteBook = async (request: Request, response: Response) => {

    const token = request.body.jwt;

    if (token) {

        var values;

        try {
            values = decodeJWT(token);
        } catch (error) {
            response.status(401).json({
                success: false,
                msg: error.message
            });
        }
        
    }

    if (values.role == "manager") {

        const res = await getRepository(Book).delete(request.body.id);

        if (res.affected) {
            return response.json({
                success: true,
                msg: "Book deleted successful"
            });
        } else {
            return response.json({
                success: false,
                msg: "An error was ocurred while deleting book"
            });
        }

    } else {
        return response.json({
            success: false,
            msg: "You not have permission to delete an book"
        });
    }
}