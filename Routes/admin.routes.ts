import { Router } from "express"
import {
  buyHint,
  guildByName,
  login,
  signup,
  trade,
  updateGuild,
  useSuperpowers,
} from "../Controllers/admin.controller"

const router = Router()

router.post("/login", login)

router.post("/signup", signup)

router.post("/guildByName", guildByName)

router.post("/buyHint", buyHint)

router.post("/useSuperpower", useSuperpowers)

router.post("/trade", trade)

// router.get("/update", updateGuild)

export default router
