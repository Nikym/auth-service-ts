import { Request, Response } from 'express';
import { User, isUser } from './definitions';

export function sendError(res: Response, error: string) {
  res.status(400);
  res.json({
    error,
  });
}

export function register(req: Request, res: Response) {
  if (!isUser(req.body)) {
    sendError(res, 'Body must contain username and password');
  } else {
    const user: User = req.body;

    if (user.username.length < 3) {
      sendError(res, 'Username must be 3 or more characters long');
    }

    if (user.password.length < 8) {
      sendError(res, 'Password must be 8 or more characters long');
    }

    /**
     * ADD EXTRA USER VALIDATION AND INSERTION HERE
     */

    res.sendStatus(200);
  }
}
