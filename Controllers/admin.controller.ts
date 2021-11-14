import { NextFunction, Request, Response } from "express"
import Guild, { GuildI } from "../Models/guild.model"
import bcrypt from "bcrypt"
import { nanoid } from "nanoid"
import jwt from "jsonwebtoken"
import Admin, { AdminI } from "../Models/admin.model"

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
