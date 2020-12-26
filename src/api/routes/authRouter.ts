import Router from 'express-promise-router';

import { register, login } from '../controllers';

export const authRouter = Router();

authRouter.post('/login', login);

authRouter.post('/register', register);
