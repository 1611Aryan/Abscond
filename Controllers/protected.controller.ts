import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import toBool from "../Utilities/toBool"

interface Req extends Request {
  guildId: string
}

type controller = (req: Req, res: Response, next?: NextFunction) => {}

const genPayload = (guild: GuildI) => ({
  guildName: guild.guildName,
  guildCode: guild.guildCode,
  moles: guild.moles,
  hints: guild.hints,
  superpowers: guild.superpowers,
  leader: {
    name: guild.leader.name,
  },
  members: guild.members.map(member => ({ name: member.name })),
})

export const getProfile: controller = async (req, res) => {
  const id = req.guildId

  try {
    const guild = await Guild.findOne({ _id: id }).lean()
    if (!guild || !guild.allowed) return res.clearCookie("jwt").sendStatus(400)
    const payload = genPayload(guild)
    return res.status(200).send({
      guild: payload,
      active: toBool(process.env.GAME_ACTIVE) || false,
    })
  } catch (err) {
    console.error({ getProfile: err })
    return res.status(500).send(err)
  }
}

export const logout: controller = async (req, res) => {
  return res.clearCookie("jwt").sendStatus(200)
}
