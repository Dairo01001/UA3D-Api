import { CreateProgram, UpdateProgram } from './program.models'
import { create, getAll, getById, update } from './program.repository'

export const createProgram = async (data: CreateProgram) => {
  return await create(data)
}

export const getAllPrograms = async () => {
  return await getAll()
}

export const getProgramById = async (id: number) => {
  return await getById({ id }, { id: true, name: true, faculty: true })
}

export const updateProgram = async (id: number, data: UpdateProgram) => {
  return await update({ id }, data)
}
