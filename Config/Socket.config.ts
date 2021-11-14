import { Server } from "socket.io"
import { Server as serverI } from "http"

const SocketConfig = (server: serverI) => {
  return new Server(server, {
    cors: {
      origin:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:3000"
          : "https://abscond.netlify.app",
    },
  })
}

export default SocketConfig
