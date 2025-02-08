import { CreateServer } from '../models'
import { findAll, findById } from '../repository'

export const createServer = (data: CreateServer) => {
  return 'createServer'
}

export const findAllServer = async () => {
  return findAll()
}

export const findServerById = async (id: string) => {
  return findById({ id })
}
