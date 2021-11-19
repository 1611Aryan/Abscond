import { Router } from "express"
import {
  getProfile,
  getQuestion,
  logout,
  verifyAnswer,
} from "../Controllers/protected.controller"

const router = Router()

router.get("/profile", getProfile)

router.get("/logout", logout)

router.get("/getQuestion", getQuestion)

router.post("/answer", verifyAnswer)

export default router
