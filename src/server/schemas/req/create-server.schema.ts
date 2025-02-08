import { number, object, string, TypeOf } from 'zod'

export const CreatedServerSchema = object({
  body: object({
    port: number({
      required_error: 'Port is required',
    }),
    gridName: string({
      required_error: 'Server name is required',
    }),
    dataBaseName: string({
      required_error: 'Database name is required',
    }),
  }),
})

export type CreatedServerInput = TypeOf<typeof CreatedServerSchema>

export const CreateServerSchema = object({
  body: object({
    port: number({
      required_error: 'Port is required',
    }),
    urlHost: string({
      required_error: 'Url host is required',
    }),
    gridName: string({
      required_error: 'Server name is required',
    }),
    dataBaseName: string({
      required_error: 'Database name is required',
    }),
  }),
})

export type CreateServerInput = TypeOf<typeof CreateServerSchema>
