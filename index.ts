import Express from "express"
import { config as envConfig } from "dotenv"
import http = require("http")
import cookie from "cookie"

import ExpressConfig from "./Config/Express.config"
import MongoConfig from "./Config/Mongo.config"
import RoutesConfig from "./Config/Routes.Config"
import SocketConfig from "./Config/Socket.config"
import { verify } from "jsonwebtoken"

const PORT = process.env.PORT || 5000

const app = Express()
ExpressConfig(app)
envConfig()
MongoConfig()

const server = http.createServer(app)

const io = SocketConfig(server)

io.on("connection", socket => {
  console.log("User connected")

  const cookies = cookie.parse(socket.request.headers.cookie || "")
  const token = cookies.jwt
  if (token) {
    const { id: room } = verify(token, process.env.JWT_SECRET) as { id: string }
    if (room) socket.join(room)

    socket.on("changeMoles", ({ room, amount }) => {
      console.count("Emitted")
      io.to(room).emit("changeMoles", amount)
    })

    socket.on(
      "addSuperPower",
      ({ name, info }: { name: string; info: string }) => {
        io.to(room).emit("addSuperPower", { name, info })
      }
    )

    socket.on(
      "removeSuperPower",
      ({ name, info }: { name: string; info: string }) => {
        io.to(room).emit("removeSuperPower", { name, info })
      }
    )
  }

  socket.on("disconnect", () => console.log("Disconnected"))
})

RoutesConfig(app)

server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))
