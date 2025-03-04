import { Prisma } from '@prisma/client'
import { PrismaService } from '../services'
import { CreateFullPerson, CreatePerson, UpdatePerson } from './person.model'
import { createUser } from '../user'

const prisma = PrismaService.getInstance()

export const create = (data: CreatePerson) => {
  return prisma.person.create({
    data,
  })
}

export const update = (
  where: Prisma.PersonWhereUniqueInput,
  data: Prisma.PersonUpdateInput,
) => {
  return prisma.person.update({
    where,
    data,
  })
}

export const createFull = async ({ user, person }: CreateFullPerson) => {
  const newUser = await createUser(user)
  const newPerson = await create({ ...person, userId: newUser.id })
  return newPerson
}
