import Router from 'express-promise-router';

import { register } from '../controllers';

export const authRouter = Router();

authRouter.get('/login', (req, res) => {
  res.send('login');
});

authRouter.post('/register', register);
