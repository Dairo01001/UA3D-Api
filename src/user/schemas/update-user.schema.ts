import { number, object, string, TypeOf } from 'zod'

export const UpdateUserSchema = object({
  params: object({
    userId: string({
      required_error: 'UserId is required',
    }),
  }),
  body: object({
    roleId: number().optional(),
    statusId: number().optional(),
    username: string({
      required_error: 'Username is required',
    })
      .min(4, 'Username must be at least 4 characters')
      .optional(),
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be at most 16 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_%*?&])[A-Za-z\d@$!_%*?&]{8,16}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      )
      .optional(),
  }),
})

export type UpdateUserInput = TypeOf<typeof UpdateUserSchema>
