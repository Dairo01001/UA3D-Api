import { Prisma } from '@prisma/client'
import { PrismaService } from '../services'
import { CreateProgram } from './program.models'

const prisma = PrismaService.getInstance()

export const create = (data: CreateProgram) => {
  return prisma.program.create({
    data,
  })
}

export const getAll = () => {
  return prisma.program.findMany()
}

export const getById = (
  where: Prisma.ProgramWhereUniqueInput,
  select?: Prisma.ProgramSelect,
) => {
  return prisma.program.findUnique({ where, select })
}

export const update = (
  where: Prisma.ProgramWhereUniqueInput,
  data: Prisma.ProgramUpdateInput,
) => {
  return prisma.program.update({ where, data })
}
