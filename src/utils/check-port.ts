import net from 'net'

export const checkPort = (port: number, host = '127.0.0.1') => {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.once('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false)
      } else {
        reject(err)
      }
    })

    server.once('listening', () => {
      server.close()
      resolve(true)
    })

    server.listen(port, host)
  })
}
