import Express from "express"
import { config as envConfig } from "dotenv"

import ExpressConfig from "./Config/Express.config"
import MongoConfig from "./Config/Mongo.config"
import RoutesConfig from "./Config/Routes.Config"

const PORT = process.env.PORT || 5000

const app = Express()
ExpressConfig(app)
envConfig()
MongoConfig()

RoutesConfig(app)

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))
