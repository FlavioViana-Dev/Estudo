import { Router } from 'express';
import Controller from '../controllers/usersController';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();
const controller = new Controller();

router.get('/', controller.index);
// router.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//   }),
//   controller.show,
// );
router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  controller.create,
);
// router.put(
//   '/:id',
//   celebrate({
//     [Segments.BODY]: {
//       name: Joi.string().required(),
//       price: Joi.number().precision(2).required(),
//       quantity: Joi.number().required(),
//     },
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//   }),
//   controller.update,
// );
// router.delete(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//   }),
//   controller.delete,
// );

export default router;
