import { boolean, number, object, string, TypeOf } from 'zod'

export const CreateProgramSchema = object({
  body: object({
    name: string({
      required_error: 'Name program is required',
    }).min(4, 'Program must be at least 4 characters'),
    facultyId: number({
      required_error: 'Id faculty is required',
      invalid_type_error: 'Id faculty must be a number',
    }),
    status: boolean().optional(),
  }),
})

export const UpdateProgramSchema = object({
  body: object({
    name: string({
      required_error: 'Name program is required',
    })
      .min(4, 'Program must be at least 4 characters')
      .optional(),
    status: boolean().optional(),
  }),
  params: object({
    id: number({
      required_error: 'Id is required',
      invalid_type_error: 'Id must be a number',
    }),
  }),
})

export type CreateProgramInput = TypeOf<typeof CreateProgramSchema>
export type UpdateProgramInput = TypeOf<typeof UpdateProgramSchema>
