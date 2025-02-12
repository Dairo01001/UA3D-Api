import { NextFunction, Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import { UPLOAD_PATH } from '../config'

export const uploadImageHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      url: `${req.protocol}://${req.get('host')}/uploads/${req.file?.filename}`,
    })
  } catch (error) {
    next(error)
  }
}

export const getImagesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const uploadsDir = UPLOAD_PATH

  try {
    fs.readdir(uploadsDir, (err, files) => {
      if (err) {
        return next(err)
      }

      const images = files
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map((file) => ({
          filename: file,
          url: `${req.protocol}://${req.get('host')}/uploads/${file}`,
        }))

      res.status(200).json({ images })
    })
  } catch (error) {
    next(error)
  }
}

export const deleteImageHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { filename } = req.params
  const uploadsDir = UPLOAD_PATH

  try {
    fs.unlinkSync(path.join(uploadsDir, filename))
    res.status(200).json({ message: 'Image deleted successfully' })
  } catch (error) {
    next(error)
  }
}
