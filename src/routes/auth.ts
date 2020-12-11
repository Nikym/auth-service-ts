import Router from 'express-promise-router';

const router = Router();

router.get('/login', (req, res) => {
  res.send('login');
});

router.get('/register', (req, res) => {
  res.send('register');
});

export default router;
