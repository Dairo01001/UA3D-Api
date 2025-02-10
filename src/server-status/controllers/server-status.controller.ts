import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreateServerStatusInput, UpdateServerStatusInput } from '../schemas'
import {
  findAllServerStatus,
  findAllServerStatusActive,
  updateServerStatus,
  upsertServerStatus,
} from '../services'
import { StatusPermited } from '../../utils/server-status'

export const upsertServerStatusHandler = async (
  req: Request<{}, {}, CreateServerStatusInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  const { name, status } = req.body

  if (!Object.values(StatusPermited).includes(name as StatusPermited)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Invalid status',
    })
  }

  try {
    return res.status(StatusCodes.CREATED).json(
      await upsertServerStatus({
        name,
        status: status === undefined ? true : false,
      }),
    )
  } catch (error) {
    next(error)
  }
}

export const findAllServerStatusHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.OK).json(await findAllServerStatus())
  } catch (error) {
    next(error)
  }
}

export const findAllServerStatusActiveHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.OK).json(await findAllServerStatusActive())
  } catch (error) {
    next(error)
  }
}

export const updateServerStatusHandler = async (
  req: Request<any, {}, UpdateServerStatusInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  const { status } = req.body
  const { id } = req.params

  try {
    res
      .status(StatusCodes.OK)
      .json(await updateServerStatus(Number(id), status))
  } catch (error) {
    next(error)
  }
}
