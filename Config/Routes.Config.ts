import { Application } from "express"

import { verifyToken } from "../Middlewares/verifyToken"
import PublicRouter from "./../Routes/public.routes"
import ProtectedRouter from "./../Routes/protected.routes"
import AdminRouter from "./../Routes/admin.routes"

const RoutesConfig = (app: Application) => {
  app.use("/", PublicRouter)
  app.use("/guild", verifyToken, ProtectedRouter)
  app.use("/admin", AdminRouter)
}

export default RoutesConfig
