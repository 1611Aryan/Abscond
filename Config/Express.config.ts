import Express, { Application } from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"

const ExpressConfig = (app: Application) => {
  app.use(Express.urlencoded({ extended: true }))
  app.use(Express.json())
  app.use(
    cors({
      origin:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:3000"
          : "https://abscond.netlify.app",
      credentials: true,
    })
  )
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(cookieParser())
}

export default ExpressConfig
