import app from './app';
import auth from './routes/auth';

app.use('/auth', auth);

app.listen({port: 8000}, () => {
  console.log('*** STARTED AUTH MICROSERVICE ***');
});