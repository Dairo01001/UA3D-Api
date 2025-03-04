export interface CreatePerson {
  firstName: string
  secondName?: string
  firstSurname: string
  secondSurname?: string
  email: string
  programId: number
  userId: string
}

export interface CreateFullPerson {
  user: {
    username: string
    password: string
  }
  person: Omit<CreatePerson, 'userId'>
}

export type UpdatePerson = Omit<CreatePerson, 'userId'>
