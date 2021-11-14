import React, { useContext, createContext, useRef } from "react"
import { io, Socket } from "socket.io-client"
import { SocketEndpoint } from "../Endpoints"

type socketI = {
  socket: Socket | undefined
}

const SocketContext = createContext<socketI>({
  socket: undefined,
})

export const useSocket = () => useContext(SocketContext)

export const SocketProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const socket = useRef<Socket>(
    io(SocketEndpoint.url, {
      transports: ["websocket"],
      autoConnect: false,
    })
  )

  return (
    <SocketContext.Provider value={{ socket: socket.current }}>
      {children}
    </SocketContext.Provider>
  )
}
