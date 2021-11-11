import { Router } from "express"
import { getProfile, logout } from "../Controllers/protected.controller"

const router = Router()

router.get("/profile", getProfile)

router.get("/logout", logout)

export default router
