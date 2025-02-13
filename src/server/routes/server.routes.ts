import { Router } from 'express'
import { deserializeUser, validateResource } from '../../middlewares'
import { adminAuthorize } from '../../middlewares/admin-authorize'
import {
  createdServerHandler,
  createServerHandler,
  deleteServerHandler,
  findAllServerHandler,
  findByIdHandler,
  updateServerHandler,
} from '../controller'
import {
  CreatedServerSchema,
  CreateServerSchema,
  UpdateServerSchema,
} from '../schemas'

export const serverRoutes = () => {
  const router = Router()

  router.post(
    '/create',
    validateResource(CreatedServerSchema),
    deserializeUser,
    adminAuthorize,
    createdServerHandler,
  )
  router.put(
    '/',
    validateResource(UpdateServerSchema),
    deserializeUser,
    adminAuthorize,
    updateServerHandler,
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
  router.delete('/:id', deserializeUser, adminAuthorize, deleteServerHandler)

  return router
}
