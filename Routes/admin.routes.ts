import { Router } from "express"
import {
  award,
  bonusLevel,
  buyHint,
  buySuperpower,
  guildByName,
  login,
  signup,
  skip,
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

router.post("/buyPower", buySuperpower)

router.post("/trade", trade)

// router.get("/update", updateGuild)

router.post("/bonusLevel", bonusLevel)

router.post("/award", award)

router.post("/skip", skip)

export default router
