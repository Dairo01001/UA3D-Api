export interface ServerEntity {
  id: string
  processId: string
  port: number
  urlHost: string
  gridName: string
  dataSource: string
  dataBaseName: string
  dataBaseUser: string
  dataBasePassword: string
  statusId: number
}

export interface CreateServer {
  processId: string
  port: number
  urlHost: string
  gridName: string
  dataSource: string
  dataBaseUser: string
  dataBasePassword: string
  dataBaseName: string
}

export interface UpdateServer {
  processId?: string
  port?: number
  urlHost?: string
  gridName?: string
  dataSource?: string
  dataBaseName?: string
  dataBaseUser?: string
  dataBasePassword?: string
  statusId?: number
}
