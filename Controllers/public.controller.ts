import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import bcrypt from "bcrypt"
import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"

type controller = (req: Request, res: Response, next?: NextFunction) => {}

export const getGuilds: controller = async (req, res) => {
  try {
    const guilds = await Guild.find({}).lean()
    return res.status(200).send(guilds)
  } catch (err) {
    console.error({ getGuilds: err })
    return res.status(500).send(err)
  }
}

const genPayload = (guild: GuildI) => ({
  guildName: guild.guildName,
  guildCode: guild.guildCode,
  leader: {
    name: guild.leader.name,
  },
  members: guild.members.map(member => ({ name: member.name })),
})

export const login: controller = async (req, res) => {
  const errMessage = "Incorrect Guild Name or Password"
  const successMessage = "Login Successfull"
  const { guildName, password } = req.body
  console.log({ guildName, password })
  if (!guildName || !password)
    return res.status(400).send({ message: errMessage })
  try {
    const guild = await Guild.findOne({ guildName }).lean()
    if (!guild) return res.status(404).send({ message: errMessage })
    if (await bcrypt.compare(password, guild.password)) {
      const payload = genPayload(guild)

      const token = jwt.sign(
        {
          id: guild._id,
        },
        process.env.JWT_SECRET
      )

      return res
        .cookie("jwt", token, {
          maxAge: 1000 * 60 * 60 * 5,
          secure: true,
          httpOnly: true,
          sameSite: "none",
        })
        .status(200)
        .send({ message: successMessage, guild: payload })
    }
    return res.status(404).send({ message: errMessage })
  } catch (err) {
    console.error({ Login: err })
    return res.status(500).send(err)
  }
}

export const createGuild: controller = async (req, res) => {
  const { guildName, password }: GuildI = req.body
  const { name, email, phone, branch, year } = req.body

  if (!guildName || !password || !name || !email || !phone || !branch || !year)
    return res.status(400).send({ message: "Incorrect/ Incomplete Data" })

  const leader = {
    name,
    email,
    phone,
    branch,
    year,
  }

  try {
    const existingGuild = await Guild.findOne({
      $or: [
        { guildName },
        {
          "leader.email": leader.email,
        },
        {
          "leader.phone": leader.phone,
        },
        {
          "members.email": leader.email,
        },
        {
          "members.phone": leader.phone,
        },
      ],
    }).lean()

    if (existingGuild && false)
      return res
        .status(400)
        .send("Guild Name not Available/You are already part of a guild")

    const guild = await Guild.create({
      guildName,
      guildCode: nanoid(12),
      password,
      leader,
    })

    return res.status(200).send("Guild Created")
  } catch (err) {
    console.error({ signup: err })
    return res.status(500).send(err)
  }
}

export const verifyCodeAndMember: controller = async (req, res, next) => {
  const { guildCode, name, email, phone, branch, year } = req.body
  if (!guildCode || !email || !phone || !name || !year || !branch)
    return res.sendStatus(400)

  const member = { email, phone, name, year, branch }

  try {
    const alreadyMmeber = await Guild.findOne({
      $or: [
        {
          "leader.email": member.email,
        },
        {
          "leader.phone": member.phone,
        },
        {
          "members.email": member.email,
        },
        {
          "members.phone": member.phone,
        },
      ],
    }).lean()

    if (alreadyMmeber)
      return res.status(400).send({ message: "Already a member of a Guild" })

    const guildExists = await Guild.findOne({ guildCode }).lean()
    if (
      guildExists &&
      guildExists.members.length < parseInt(process.env.GUILD_SIZE) - 1
    )
      return next()
    else if (guildExists) return res.status(400).send(" Guild already Full")
    else return res.status(400).send({ message: "Incorrect Guild Code" })
  } catch (err) {
    console.error({ verifyCodeAndMember: err })
    return res.status(500).send(err)
  }
}

export const joinGuild: controller = async (req, res) => {
  const { guildCode, name, email, phone, branch, year } = req.body
  const member = { email, phone, name, year, branch }
  try {
    await Guild.findOneAndUpdate(
      { guildCode },
      {
        $push: { members: member },
      }
    )
    return res.status(200).send("Guild Joined Successfully")
  } catch (err) {
    console.error({ joinGuild: err })
    return res.status(500).send(err)
  }
}
