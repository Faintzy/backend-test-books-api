import { Router, Request, Response } from 'express';
import { getBookById, createBook } from '../../controllers/BookController';
import checkToken from '../../middlewares/token';

const bookRouter = Router();

bookRouter.get('/book/:id', checkToken, getBookById);
bookRouter.put('/book/create', checkToken, createBook);

export default bookRouter;