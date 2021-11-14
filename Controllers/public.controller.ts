import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import bcrypt from "bcrypt"
import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"
import Question from "../Models/question.model"
import transporter from "../Config/Nodemailer.config"
import toBool from "../Utilities/toBool"

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
  moles: guild.moles,
  hints: guild.hints,
  superpowers: guild.superpowers,
  leader: {
    name: guild.leader.name,
  },
  members: guild.members.map(member => ({ name: member.name })),
})

const generateQuestions = async () => {
  const questions = await Question.findOne({}).lean()
  if (!questions) return false

  return questions.all.map(ques => {
    const length = ques.questions.length
    return ques.questions[Math.floor(Math.random() * length)].id || false
  })
}

export const login: controller = async (req, res) => {
  const errMessage = "Incorrect Guild Name or Password"
  const successMessage = "Login Successfull"
  const { guildName, password } = req.body

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
  if (!toBool(process.env.REGISTRATION_ACTIVE))
    return res.status(500).send({ message: "Registrations Have Been Closed" })

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
    const numOfTeams = await Guild.countDocuments()

    if (numOfTeams >= parseInt(process.env.MAX_TEAMS))
      return res.status(500).send({ message: "Registrations Have Been Closed" })

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

    // const questions = await generateQuestions()
    // if (!questions)
    //   res
    //     .status(500)
    //     .send({ message: "Something went wrong! Please try again later" })

    await Guild.create({
      guildName,
      guildCode: nanoid(12),
      password,
      leader,
      logs: [
        {
          logtype: "create",
          message: `Guild ${guildName} created by ${name} on ${new Date().toLocaleString()}`,
        },
      ],
      // questions,
    })

    const options = {
      from: process.env.NODEMAILER_SENDER,
      to: email,
      subject: "Guild Successfully Created",
      html: `
      Hello ${name},
<br />
<br />
We hope that you and your family are doing great during this pandemic.
<br />
This mail is to confirm that your guild "${guildName}" has successfully been created
<br /><br />
We recommend you to stay active on your Mail and WhatsApp.
<br /><br />
See you on 20th
<br /><br />
If you have any query you can contact the following people
<br />
Parth Sood (GenSec) : 7986810284
<br />
Anushka Khera(GenSec) : 7428265269
<br />
Or simply reply to this mail thread
<br /><br />
Regards
Team IIChE TIET
      `,
    }
    transporter.sendMail(options)

    return res.status(200).send("Guild Created")
  } catch (err) {
    console.error({ signup: err })
    return res.status(500).send(err)
  }
}

export const verifyCodeAndMember: controller = async (req, res, next) => {
  if (!toBool(process.env.TEAMMATES_JOIN))
    return res.status(500).send({ message: "Registrations Have Been Closed" })

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
        $push: {
          members: member,
          logs: {
            logtype: "join",
            message: `${name} joined on ${new Date().toLocaleString()}`,
          },
        },
      }
    )
    return res.status(200).send("Guild Joined Successfully")
  } catch (err) {
    console.error({ joinGuild: err })
    return res.status(500).send(err)
  }
}
