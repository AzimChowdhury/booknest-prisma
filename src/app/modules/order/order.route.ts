import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.createBook
);

// router.get('/', BookController.getAllBooks);
// router.get('/:id/category', BookController.getBookByCategoryId);
// router.get('/:id', BookController.getSingleBook);
// router.patch(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   BookController.updateSingleBook
// );
// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   BookController.deleteSingleBook
// );

export const OrderRoutes = router;
