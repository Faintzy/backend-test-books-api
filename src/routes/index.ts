import { Router, Request, Response, request } from 'express';
import userRouter from './user/index';
import bookRouter from './book/index';

const routes = Router();

routes.get('/', (request: Request, response: Response) => response.json('ok'));
routes.use(userRouter);
routes.use(bookRouter);

export default routes;