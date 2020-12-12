import * as express from 'express';
import api from './api';

const app = express();

app.use('/api/v1', api);

app.listen({ port: 8000 }, () => {
  console.log('*** STARTED AUTH MICROSERVICE ***');
});
