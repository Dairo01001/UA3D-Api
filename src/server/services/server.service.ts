import { CreateServer, ServerEntity, UpdateServer } from '../models'
import { findAll, findById, update, create } from '../repository'

export const createServer = (data: CreateServer): Promise<ServerEntity> => {
  return create(data)
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
