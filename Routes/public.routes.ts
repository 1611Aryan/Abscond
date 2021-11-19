import { Router } from "express"
import {
  getGuilds,
  login,
  createGuild,
  verifyCodeAndMember,
  joinGuild,
  leaderboard,
  changePassword,
} from "../Controllers/public.controller"

const router = Router()

process.env.NODE_ENV !== "production" && router.route("/").get(getGuilds)

router.route("/login").post(login)

router.route("/createGuild").post(createGuild)

router.route("/joinGuild").post(verifyCodeAndMember, joinGuild)

router.route("/leaderboard").get(leaderboard)

process.env.NODE_ENV !== "production" &&
  router.post("/changePassword", changePassword)
export default router
