import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { User, isUser } from './definitions';

export function login(req: Request, res: Response) {
  if (!isUser(req.body)) {
    res.status(400);
    res.json({
      error: 'Body must contain username and password',
    });
  } else {
    const user: User = req.body;

    /**
     * REPLACE BELOW WITH PROPER VALIDATION
     */

    if (user.username !== 'test') {
      res.status(401);
      res.json({
        error: 'Username or password incorrect',
      });
      return;
    }

    if (user.password !== 'validpass') {
      res.status(401);
      res.json({
        error: 'Username or password incorrect',
      });
      return;
    }

    /**
     * END PROPER VALIDATION
     */

    const token: string = jwt.sign(
      {
        user: user.username,
      },
      'secret',
      {
        expiresIn: '30m',
      },
    );

    res.status(200);
    res.json({
      user: user.username,
      token,
    });
  }
}
