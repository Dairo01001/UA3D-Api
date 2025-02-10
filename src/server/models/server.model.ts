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
  pvtoPort: number
  port: number
  urlHost: string
  gridName: string
  dataSource: string
  dataBaseUser: string
  dataBasePassword: string
  dataBaseName: string
}

export interface UpdateServer {
  pvtoPort?: number
  port?: number
  urlHost?: string
  gridName?: string
  dataSource?: string
  dataBaseName?: string
  dataBaseUser?: string
  dataBasePassword?: string
  statusId?: number
}
