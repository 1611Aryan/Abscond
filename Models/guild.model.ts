import { Document, model, Schema } from "mongoose"
import bcrypt from "bcrypt"

interface personI {
  name: string
  email: string
  phone: string
  branch: string
  year: string
}

export type GuildI = {
  guildName: string
  guildCode: string
  password: string
  leader: personI
  members: personI[]
}

const MemberSchema = new Schema<personI>({
  name: String,
  email: String,
  phone: String,
  branch: String,
  year: String,
})

const GuildSchema = new Schema<GuildI>(
  {
    guildName: {
      type: String,
      required: true,
      unique: true,
    },
    guildCode: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    leader: {
      type: MemberSchema,
      required: true,
      _id: false,
    },
    members: {
      type: [MemberSchema],
      required: true,
      _id: false,
    },
  },
  {
    timestamps: true,
  }
)

GuildSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const Guild = model<GuildI & Document>("Guild", GuildSchema)

export default Guild
