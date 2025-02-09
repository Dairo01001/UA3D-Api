import { CreateServer, ServerEntity, UpdateServer } from '../models'
import { findAll, findById, update } from '../repository'

export const createServer = (data: CreateServer): Promise<ServerEntity> => {
  return createServer(data)
}

export const findAllServer = async () => {
  return findAll()
}

export const findServerById = async (id: string) => {
  return findById({ id })
}

export const updateServer = (id: string, data: UpdateServer) => {
  return update({ id }, data)
}
