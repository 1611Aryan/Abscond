import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import bcrypt from "bcrypt"

import Admin, { AdminI } from "../Models/admin.model"
import toBool from "../Utilities/toBool"

import powers from "../Utilities/Powers"

type controller = (req: Request, res: Response, next?: NextFunction) => {}

export const login: controller = async (req, res) => {
  const { name, password } = req.body as AdminI
  if (!name || !password)
    return res.status(400).send({ message: "Incorrect Credentials" })
  try {
    const adminUser = await Admin.findOne({ name }).lean()
    if (!adminUser)
      return res.status(401).send({ message: "Incorrect Credentials" })
    if (await bcrypt.compare(password, adminUser.password))
      return res.status(200).send({ message: "Login Successfull" })
    return res.status(401).send({ message: "Incorrect Credentials" })
  } catch (err) {
    console.error({ adminLogin: err })
    return res.status(500).send(err)
  }
}

export const signup: controller = async (req, res) => {
  const { code, name, password } = req.body as AdminI & { code: string }
  if (!code || !name || !password) return res.sendStatus(400)
  try {
    if (code !== process.env.ADMIN_CODE)
      return res.status(401).send({ message: "Incorrect Code" })
    const existing = await Admin.findOne({ name }).lean()
    if (existing) return res.status(409).send({ message: "Name Alredy in Use" })
    await Admin.create({
      name,
      password,
    })
    return res.status(201).send({ message: "Account Created" })
  } catch (err) {
    console.error({ adminSignup: err })
    return res.status(500).send(err)
  }
}

export const guildByName: controller = async (req, res) => {
  const name = req.body.name

  try {
    let guilds

    name === ""
      ? (guilds = await Guild.find({}, { password: 0, _id: 0 }))
      : (guilds = await Guild.find(
          { guildName: { $regex: `^${name}`, $options: "i" } },
          { password: 0 }
        ))

    if (guilds) return res.status(200).send({ guilds })
    return res.sendStatus(404)
  } catch (err) {
    console.log({ teamByName: err })
    return res.status(500).send(err)
  }
}

export const updateGuild: controller = async (req, res) => {
  try {
    console.log("ran")
    await Guild.updateMany({}, { $set: { questionNo: 1 } })
  } catch (err) {
    console.log(err)
  }
}

export const buyHint: controller = async (req, res) => {
  if (!toBool(process.env.GAME_ACTIVE))
    return res.status(403).send({ message: "The Game Has Not Started Yet." })

  const name = (req.body.name || "").trim()
  try {
    const guild = await Guild.findOne({ guildName: name }).lean()
    if (!guild)
      return res.status(404).send({
        message: "Guild Not Found.\nPlease Enter Correct Guild Name.",
      })

    const questionNo = guild.questionNo

    console.log({ questionNo })
    if (!guild.hints[questionNo - 1])
      return res.status(403).send({ message: "Hint Already Used." })

    await Guild.updateOne(
      { _id: guild._id },
      {
        $set: {
          [`hints.${questionNo - 1}`]: false,
        },
        $inc: { moles: -5 },
        $push: {
          logs: {
            logType: "hint",
            message: `Hint Purchased for question no. ${questionNo} on ${new Date().toLocaleString()}`,
          },
        },
      }
    )

    return res
      .status(200)
      .send({ message: "Hint Purchased.\nYou can now provide the hint" })
  } catch (err) {
    console.log({ buyHint: err })
    return res.status(500).send(err)
  }
}

const powerExists = (
  superpowers: {
    name: string
    info: string
  }[],
  power: string
) => {
  let exists = false

  superpowers.forEach(superpower => {
    if (superpower.name === power) exists = true
  })

  return exists
}

export const useSuperpowers: controller = async (req, res) => {
  if (!toBool(process.env.GAME_ACTIVE))
    return res.status(403).send({ message: "The Game Has Not Started Yet." })

  const name = ((req.body.name as string) || "").trim()
  const power = ((req.body.power as string) || "").trim().toLowerCase()

  try {
    const guild = await Guild.findOne({ guildName: name }).lean()
    if (!guild)
      return res.status(404).send({
        message: "Guild Not Found.\nPlease Enter Correct Guild Name.",
      })

    if (guild.questionNo >= 15)
      return res
        .status(403)
        .send({ message: "Can't Use The Power On Last Question" })

    if (!guild.superpowers)
      return res
        .status(406)
        .send({ message: "The Guild currently has 0 superpowers." })
    if (!powerExists(guild.superpowers, power))
      return res.status(404).send({
        message: "The Guild doesn't possess the requested superpower ",
      })

    let message

    if (power === "saitama") message = await useSaitama(guild, power)
    if (power === "luffy") message = await useLuffy(guild, power)
    if (power === "trafalgar d law") message = await useTDL(guild, power)
    if (power === "l lawliet") message = await useLL(guild, power)
    if (power === "tsunade") message = await useTsunade(guild, power)

    return res.status(200).send({ message })
  } catch (err) {
    return res.status(500).send(err)
  }
}

const useSaitama = async (guild: any, power: string) => {
  try {
    await Guild.updateOne(
      { _id: guild._id },
      {
        $pull: {
          superpowers: { name: power },
        },
        $inc: {
          questionNo: 1,
        },
        $push: {
          logs: {
            logtype: "superpower",
            message: `Superpower ${power} used on ${new Date().toLocaleString()} `,
          },
        },
      }
    )
    return "Superpower Used. Refresh To Go To Next Question."
  } catch (err) {
    console.log(err)
    return ""
  }
}

const useLuffy = async (guild: any, power: string) => {
  try {
    await Guild.updateOne(
      { _id: guild._id },
      {
        $pull: {
          superpowers: { name: power },
        },

        $push: {
          logs: {
            logtype: "superpower",
            message: `Superpower ${power} used on ${new Date().toLocaleString()} `,
          },
        },
      }
    )
    return "Superpower Used. Reveal the partial answer."
  } catch (err) {
    console.log(err)
    return ""
  }
}

const useTDL = async (guild: any, power: string) => {
  try {
    const currentQuestion = {
      no: guild.questionNo,
      set: guild.questions[guild.questionNo - 1],
    }

    const newQuestion = (): string => {
      const q = Math.floor(Math.random() * 4).toString()

      if (q === currentQuestion.set.id) return newQuestion()
      else return q
    }

    let question = newQuestion()

    await Guild.updateOne(
      { _id: guild._id },
      {
        $pull: {
          superpowers: { name: power },
        },

        $set: {
          [`questions.${currentQuestion.no - 1}.id`]: question,
        },

        $push: {
          logs: {
            logtype: "superpower",
            message: `Superpower ${power} used on ${new Date().toLocaleString()} `,
          },
        },
      }
    )
    return "Superpower Used. Refresh to See the New Question."
  } catch (err) {
    console.log(err)
    return ""
  }
}

const useLL = async (guild: any, power: string) => {
  const questionNo = guild.questionNo

  try {
    await Guild.updateOne(
      { _id: guild._id },
      {
        $pull: {
          superpowers: { name: power },
        },
        $set: {
          [`hints.${questionNo - 1}`]: false,
        },

        $push: {
          logs: {
            logtype: "superpower",
            message: `Superpower ${power} used on ${new Date().toLocaleString()} `,
          },
        },
      }
    )
    return "Superpower Used. Reveal the Hint"
  } catch (err) {
    console.log(err)
    return ""
  }
}

const useTsunade = async (guild: any, power: string) => {
  try {
    await Guild.updateOne(
      { _id: guild._id },
      {
        $pull: {
          superpowers: { name: power },
        },
        $inc: {
          moles: 25,
        },
        $push: {
          logs: {
            logtype: "superpower",
            message: `Superpower ${power} used on ${new Date().toLocaleString()} `,
          },
        },
      }
    )
    return "Superpower Used. Moles Gained."
  } catch (err) {
    console.log(err)
    return ""
  }
}

export const trade: controller = async (req, res) => {
  //Gaining Power Losing Moles
  const name1 = ((req.body.name1 as string) || "").trim()
  //Losing Power Gaining Moles
  const name2 = ((req.body.name2 as string) || "").trim()
  const price = parseInt(req.body.price) as number
  const power =
    (req.body.power.toLowerCase().trim() as "saitama") ||
    "tsunade" ||
    "luffy" ||
    "l_lawliet" ||
    "trafalgar_d_law"

  try {
    const guild1 = await Guild.findOne({ guildName: name1 }).lean()
    const guild2 = await Guild.findOne({ guildName: name2 }).lean()
    if (!guild1 || !guild2)
      return res.status(404).send({
        message: "Guild Not Found.\nPlease Enter Correct Guild Name.",
      })

    if (!powerExists(guild2.superpowers, power))
      return res
        .status(400)
        .send({ message: "The Guild Doesn't have the requested superpower" })
    if (guild1.moles < price)
      return res
        .status(400)
        .send({ message: "The Guild Doesn't Have Enough Moles" })

    await Guild.updateOne(
      { _id: guild1._id },
      {
        $inc: { moles: -1 * price },
        $push: {
          superpowers: powers[power],
          logs: {
            logtype: "trade",
            message: `Traded with ${name2}, Gained Power ${power}, Lost ${price}moles`,
          },
        },
      }
    )
    await Guild.updateOne(
      { _id: guild2._id },
      {
        $inc: { moles: 1 * price },
        $push: {
          logs: {
            logtype: "trade",
            message: `Traded with ${name1}, Lost Power ${power}, Gained ${price}moles`,
          },
        },
        $pull: {
          superpowers: { name: power },
        },
      }
    )

    return res.status(200).send({ message: "Trading Successfull" })
  } catch (err) {
    console.log({ trade: err })
    return res.status(500).send(err)
  }
}
