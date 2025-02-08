import { Router } from 'express'
import {
  uploadImageHandler,
  getImagesHandler,
  deleteImageHandler,
} from './images.controller'
import { upload } from '../services/multer.service'
import { deserializeUser } from '../middlewares'

export const imagesRouter = (): Router => {
  const router = Router()

  router.post(
    '/upload',
    deserializeUser,
    upload.single('image'),
    uploadImageHandler,
  )
  router.get('/uploads', deserializeUser, getImagesHandler)
  router.delete('/uploads/:filename', deserializeUser, deleteImageHandler)

  return router
}
