import { Router } from 'express'
import { deserializeUser, validateResource } from '../middlewares'
import {
  createFullPersonHandler,
  createPersonHandler,
  updatePersonHandler,
} from './person.controller'
import { CreateFullPersonSchema, CreatePersonSchema } from './person.schema'
import { AuthUserSchema } from '../schemas'

export const personRoutes = (): Router => {
  const router = Router()

  router.post('/', validateResource(CreatePersonSchema), createPersonHandler)
  router.put(
    '/:id',
    deserializeUser,
    validateResource(CreatePersonSchema),
    updatePersonHandler,
  )
  router.post(
    '/full',
    validateResource(CreateFullPersonSchema),
    createFullPersonHandler,
  )

  return router
}
