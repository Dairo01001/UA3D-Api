import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreatedServerInput, CreateServerInput } from '../schemas'
import { createServer, findAllServer, findServerById } from '../services'
import { checkPort } from '../../utils/check-port'

export const createServerHandler = async (
  req: Request<{}, {}, CreateServerInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.OK).json(await createServer(req.body))
  } catch (error) {
    next(error)
  }
}

export const createdServerHandler = async (
  req: Request<{}, {}, CreatedServerInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { port, gridName, dataBaseName } = req.body
    const portIsAvailable = await checkPort(port)

    const newServer = await fetch('http://131.100.50.247:3002/server', {
      method: 'POST',
      body: JSON.stringify({ port: port + '', gridName, dataBaseName }),
      headers: { 'Content-Type': 'application/json' },
    })

    res.status(StatusCodes.CREATED).json(await newServer.json())
  } catch (error) {
    next(error)
  }
}

export const findAllServerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(StatusCodes.OK).json(await findAllServer())
  } catch (error) {
    next(error)
  }
}

export const findByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params?.id
  try {
    res.status(StatusCodes.OK).json(await findServerById(id))
  } catch (error) {
    next(error)
  }
}
