import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreateFullPersonInput, CreatePersonInput } from './person.schema'
import { createFullPerson, createPerson, updatePerson } from './person.service'

export const createPersonHandler = async (
  req: Request<{}, {}, CreatePersonInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.CREATED).json(await createPerson(req.body))
  } catch (error) {
    next(error)
  }
}

export const updatePersonHandler = async (
  req: Request<any, {}, CreatePersonInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res
      .status(StatusCodes.OK)
      .json(await updatePerson(Number(req.params?.id), req.body))
  } catch (error) {
    next(error)
  }
}

export const createFullPersonHandler = async (
  req: Request<{}, {}, CreateFullPersonInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.CREATED).json(await createFullPerson(req.body))
  } catch (error) {
    next(error)
  }
}
