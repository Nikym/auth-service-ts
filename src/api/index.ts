import * as express from 'express';
import * as bodyParser from 'body-parser';
import { authRouter } from './routes';

const api = express();

api.use(bodyParser.json());

api.use('/auth', authRouter);

export default api;
