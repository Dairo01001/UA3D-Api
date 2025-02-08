import { Router } from 'express'
import { deserializeUser, validateResource } from '../../middlewares'
import { adminAuthorize } from '../../middlewares/admin-authorize'
import {
  createdServerHandler,
  createServerHandler,
  findAllServerHandler,
  findByIdHandler,
} from '../controller'
import { CreatedServerSchema, CreateServerSchema } from '../schemas'

export const serverRoutes = () => {
  const router = Router()

  router.post(
    '/create',
    validateResource(CreatedServerSchema),
    deserializeUser,
    adminAuthorize,
    createdServerHandler,
  )
  router.post(
    '/',
    validateResource(CreateServerSchema),
    deserializeUser,
    adminAuthorize,
    createServerHandler,
  )
  router.get('/', findAllServerHandler)
  router.get('/:id', deserializeUser, findByIdHandler)

  return router
}
