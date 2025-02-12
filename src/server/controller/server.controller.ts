import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import {
  CreatedServerInput,
  CreateServerInput,
  UpdateServerInput,
} from '../schemas'
import {
  createServer,
  findAllServer,
  findServerById,
  updateServer,
} from '../services'
import { checkPort } from '../../utils/check-port'
import { ADMIN_OPEN_URL } from '../../config'
import { deleteServer } from '../repository'

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

export const updateServerHandler = async (
  req: Request<{ id: string }, {}, UpdateServerInput['body']>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body
    res.status(StatusCodes.OK).json(await updateServer(id, req.body))
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
    const { port, gridName } = req.body

    const newServer = await fetch(`${ADMIN_OPEN_URL}/server`, {
      method: 'POST',
      body: JSON.stringify({ port: port, gridName }),
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

export const deleteServerHandler = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params
  try {
    const server = await deleteServer({ id })
    await fetch(`${ADMIN_OPEN_URL}/server/${server.gridName}`, {
      method: 'DELETE',
    })
    return server
  } catch (error) {
    next(error)
  }
}
