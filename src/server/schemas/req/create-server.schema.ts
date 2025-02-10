import { number, object, string, TypeOf } from 'zod'

export const CreateServerSchema = object({
  body: object({
    pvtoPort: number({
      required_error: 'PVTO is required',
    }),
    port: number({
      required_error: 'Port is required',
    }),
    urlHost: string({
      required_error: 'Url host is required',
    }),
    gridName: string({
      required_error: 'Server name is required',
    }),
    dataSource: string({
      required_error: 'Data source is required',
    }),
    dataBaseName: string({
      required_error: 'Database name is required',
    }),
    dataBaseUser: string({
      required_error: 'Database user is required',
    }),
    dataBasePassword: string({
      required_error: 'Database password is required',
    }),
  }),
})

export type CreateServerInput = TypeOf<typeof CreateServerSchema>

export const CreatedServerSchema = object({
  body: object({
    port: number({
      required_error: 'Port is required',
    }),
    gridName: string({
      required_error: 'Server name is required',
    }),
  }),
})

export type CreatedServerInput = TypeOf<typeof CreateServerSchema>

export const UpdateServerSchema = object({
  body: object({
    id: string({
      required_error: 'Id is required',
    }),
    pvtoPort: number({
      required_error: 'PVTO port is required',
    }).optional(),
    port: number({
      required_error: 'Port is required',
    }).optional(),
    urlHost: string({
      required_error: 'Url host is required',
    }).optional(),
    gridName: string({
      required_error: 'Server name is required',
    }).optional(),
    dataSource: string({
      required_error: 'Data source is required',
    }).optional(),
    dataBaseName: string({
      required_error: 'Database name is required',
    }).optional(),
    dataBaseUser: string({
      required_error: 'Database user is required',
    }).optional(),
    dataBasePassword: string({
      required_error: 'Database password is required',
    }).optional(),
    statusId: number({
      required_error: 'Status id is required',
    }).optional(),
  }),
})

export type UpdateServerInput = TypeOf<typeof UpdateServerSchema>
