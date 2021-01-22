import "reflect-metadata";
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import routes from './routes/index';
import { createConnection } from 'typeorm';

const app = express();

createConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(3333);