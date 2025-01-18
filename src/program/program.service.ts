import { CreateProgram } from './program.models'
import { create, getAll, getById, updateById } from './program.repository'

export const createProgram = async (data: CreateProgram) => {
  return await create(data)
}

export const getAllPrograms = async () => {
  return await getAll({}, { id: true, name: true, status: true })
}

export const getProgramById = async (id: number) => {
  return await getById({ id }, { id: true, name: true, faculty: true })
}

export const updateProgram = async (id: number, status: boolean) => {
  const data = await updateById({ id }, { status })
  return data
}
