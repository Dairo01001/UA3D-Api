import { Router } from 'express';
import { validateResource } from '../../middlewares';
import { createUserHandler } from '../controller';
import { AuthUserSchema } from '../../schemas';

export const userRoutes = (): Router => {
  const router = Router();

  router.post('/', validateResource(AuthUserSchema), createUserHandler);

  return router;
};
