import { Document, model, Schema } from "mongoose"
import bcrypt from "bcrypt"

export interface AdminI {
  name: string
  password: string
}

const AdminSchema = new Schema<AdminI>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

AdminSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const Admin = model<AdminI & Document>("Admin", AdminSchema)

export default Admin
