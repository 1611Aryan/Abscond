import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import bcrypt from "bcrypt"
import { nanoid } from "nanoid"

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
      const { password, ...restGuild } = guild
      return res
        .status(200)
        .send({ message: successMessage, payload: { guild: restGuild } })
    }
    return res.status(404).send({ message: errMessage })
  } catch (err) {
    console.error({ Login: err })
    return res.status(500).send(err)
  }
}

export const createGuild: controller = async (req, res) => {
  const { guildName, password, leader }: GuildI = req.body

  if (
    !guildName ||
    !password ||
    !leader ||
    !leader.name ||
    !leader.email ||
    !leader.phone ||
    !leader.branch ||
    !leader.year
  )
    return res.status(400).send({ message: "Incorrect/ Incomplete Data" })

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

    if (existingGuild)
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
  const { guildCode, member } = req.body
  if (
    !guildCode ||
    !member ||
    !member.email ||
    !member.phone ||
    !member.name ||
    !member.year ||
    !member.branch
  )
    return res.sendStatus(400)
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
    else return res.status(400).send("Incorrect Guild Code")
  } catch (err) {
    console.error({ verifyCodeAndMember: err })
    return res.status(500).send(err)
  }
}

export const joinGuild: controller = async (req, res) => {
  const { guildCode, member } = req.body
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
