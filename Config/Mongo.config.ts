import mongoose, { ConnectOptions } from "mongoose"

const MongoConfig = () => {
  const MongoURI = process.env.MONGODB_URI

  const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

  mongoose.connect(MongoURI, mongoOptions as ConnectOptions)

  const connection = mongoose.connection

  connection.once("open", () =>
    console.log("\x1b[36mDatabase is Connected\x1b[0m")
  )
}

export default MongoConfig
