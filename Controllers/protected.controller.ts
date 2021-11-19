import { NextFunction, Request, Response } from "express"
import { resolveContent } from "nodemailer/lib/shared"
import Guild, { GuildI } from "../Models/guild.model"
import Question from "../Models/question.model"
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
  questionNo: guild.questionNo,
  completed: guild.completed,
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

export const getQuestion: controller = async (req, res) => {
  try {
    const guild = await Guild.findOne({ _id: req.guildId }).lean()
    if (!guild || !guild.allowed) return res.clearCookie("jwt").sendStatus(400)
    const questionNo = guild.questionNo
    const set = guild.questions
    const questions = await Question.findOne({ name: "all" }).lean()
    if (!questions) return res.sendStatus(500)

    const all = questions.questions

    const [questionSet] = all.filter(question => question.qno === questionNo)

    const [currentQuestion] = questionSet.sets.filter(
      q => q.id === set[questionNo - 1].id
    )

    if (currentQuestion.type === "image" || currentQuestion.type === "download")
      return res.status(200).send({
        question: { image: currentQuestion.image, type: currentQuestion.type },
      })
    if (currentQuestion.type === "text-drive")
      return res.status(200).send({
        question: {
          question: currentQuestion.question,
          drive: currentQuestion.drive,
          type: currentQuestion.type,
        },
      })
    if (currentQuestion.type === "search")
      return res.status(200).send({
        question: {
          image: currentQuestion.image,
          drive: currentQuestion.drive,
          type: currentQuestion.type,
        },
      })
    return res.status(200).send({
      question: {
        question: currentQuestion.question,
        type: currentQuestion.type,
      },
    })
  } catch (err) {
    console.log({ getQuestion: err })
    return res.status(500).send(err)
  }
}

export const verifyAnswer: controller = async (req, res) => {
  const answer = (req.body.answer as string).trim().toLowerCase()

  try {
    const guild = await Guild.findOne({ _id: req.guildId })
    if (!guild || !guild.allowed) return res.clearCookie("jwt").sendStatus(400)

    if (guild.bonusActive)
      return res.status(400).send({ message: "First Finish The Bonus Level" })

    const questionNo = guild.questionNo
    const set = guild.questions
    const questions = await Question.findOne({ name: "all" }).lean()
    if (!questions) return res.sendStatus(500)

    const all = questions.questions

    const [questionSet] = all.filter(question => question.qno === questionNo)

    const [currentQuestion] = questionSet.sets.filter(
      q => q.id === set[questionNo - 1].id
    )
    if (currentQuestion.answer.trim().toLowerCase() !== answer)
      return res.status(406).send({ message: "Incorrect Answer" })

    if (questionNo !== 15) {
      await guild.update({
        $inc: { questionNo: 1 },
        $push: {
          logs: {
            logtype: "answer",
            message: `Question ${questionNo} answered successfully on ${new Date().toLocaleString()} `,
          },
        },
      })
      return res.status(200).send({ message: "Correct Answer" })
    }
    await guild.update({
      $set: { completed: true },
      $push: {
        logs: {
          logtype: "answer",
          message: `Question ${questionNo} answered successfully on ${new Date().toLocaleString()} `,
        },
      },
    })
    return res.status(200).send({ message: "Correct Answer", completed: true })
  } catch (err) {
    console.log({ verifyAnswer: err })
    return res.status(500).send(err)
  }
}
