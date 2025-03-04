import { CreateFullPerson, CreatePerson, UpdatePerson } from './person.model'
import { create, createFull, update } from './person.repository'

export const createPerson = async (data: CreatePerson) => {
  return await create(data)
}

export const updatePerson = async (id: number, data: UpdatePerson) => {
  return await update({ id }, data)
}

export const createFullPerson = async (data: CreateFullPerson) => {
  return await createFull(data)
}
