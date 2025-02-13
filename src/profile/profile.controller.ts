import { NextFunction, Request, Response } from 'express'
import { CreateProfileInput, UpdateProfileInput } from './profile.schema'
import { StatusCodes } from 'http-status-codes'
import {
  createOrUpdateProfile,
  createProfile,
  updateProfile,
} from './profile.service'

export const createProfileHandler = async (
  req: Request<{}, {}, CreateProfileInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user } = res.locals
    res
      .status(StatusCodes.CREATED)
      .json(await createProfile({ ...req.body, userId: user.id }))
  } catch (error) {
    next(error)
  }
}

export const updateProfileHandler = async (
  req: Request<any, {}, CreateProfileInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res
      .status(StatusCodes.OK)
      .json(await updateProfile(Number(req.params?.id), req.body))
  } catch (error) {
    next(error)
  }
}

export const upsertProfileHandler = async (
  req: Request<{}, {}, UpdateProfileInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res
      .status(StatusCodes.OK)
      .json(await createOrUpdateProfile({ ...req.body }))
  } catch (error) {
    next(error)
  }
}
