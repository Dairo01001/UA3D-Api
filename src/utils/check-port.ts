import express from 'express'

export const checkPort = (port: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const app = express()

    const server = app.listen(port, () => {
      server.close(() => {
        resolve(true)
      })
    })

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false)
      } else {
        reject(err)
      }
    })
  })
}
