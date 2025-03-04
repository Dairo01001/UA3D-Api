import { number, object, string, TypeOf } from 'zod'

export const CreatePersonSchema = object({
  body: object({
    firstName: string({
      required_error: 'First name is required',
    }).min(4, 'First name must be at least 4 characters'),
    secondName: string({
      required_error: 'Second name is required',
    }).optional(),
    firstSurname: string({
      required_error: 'Fist surname is required',
    }).min(4, 'Fist surname must be at least 4 characters'),
    secondSurname: string({
      required_error: 'Second surname is required',
    }).optional(),
    email: string({
      required_error: 'Email is required',
    }).email('Email is invalid'),
    programId: number({
      required_error: 'Program id is required',
      invalid_type_error: 'Program id is invalid',
    }),
    userId: string({
      required_error: 'User id is required',
    }),
  }),
})

export type CreatePersonInput = TypeOf<typeof CreatePersonSchema>

export const CreateFullPersonSchema = object({
  body: object({
    user: object({
      username: string({
        required_error: 'Username is required',
      }).min(4, 'Username must be at least 4 characters'),
      password: string({
        required_error: 'Password is required',
      })
        .min(8, 'Password must be at least 8 characters')
        .max(16, 'Password must be at most 16 characters')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_%*?&])[A-Za-z\d@$!_%*?&]{8,16}$/,
          'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
        ),
    }),
    person: object({
      firstName: string({
        required_error: 'First name is required',
      }).min(4, 'First name must be at least 4 characters'),
      secondName: string({
        required_error: 'Second name is required',
      }).optional(),
      firstSurname: string({
        required_error: 'Fist surname is required',
      }).min(4, 'Fist surname must be at least 4 characters'),
      secondSurname: string({
        required_error: 'Second surname is required',
      }).optional(),
      email: string({
        required_error: 'Email is required',
      }).email('Email is invalid'),
      programId: number({
        required_error: 'Program id is required',
        invalid_type_error: 'Program id is invalid',
      }),
    }),
  }),
})

export type CreateFullPersonInput = TypeOf<typeof CreateFullPersonSchema>
