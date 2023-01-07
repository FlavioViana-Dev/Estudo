import productsRouter from '@modules/products/routes/productsRouter';
import usersRouter from '@modules/users/routes/usersRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes;
