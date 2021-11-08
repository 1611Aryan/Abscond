import Express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import mongoose, { ConnectOptions } from "mongoose"
import { config } from "dotenv"
import PublicRouter from "./Routes/public.routes"

const app = Express()

const PORT = process.env.PORT || 5000

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
config()

const MongoURI = process.env.MONGODB_URI

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MongoURI, mongoOptions as ConnectOptions)

const connection = mongoose.connection

connection.once("open", () =>
  console.log("\x1b[36mDatabase is Connected\x1b[0m")
)

app.use("/", PublicRouter)

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))
