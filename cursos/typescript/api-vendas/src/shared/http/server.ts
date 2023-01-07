import 'reflect-metadata'; //usado com o typescript
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppErros';
import 'express-async-errors';
import routes from './routes';
import '@shared/typeorm'; //basta importa ele que já chama e conecta
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: 'error', message: error.message });
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('Server Online!!! port:3333');
});

/**
 * abra o git bash como admnistrador
 * e roda os comandos
 * net stop winnat
 * net start winnat
 * e depois roada npm run dev
 */
