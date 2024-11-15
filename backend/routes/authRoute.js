import express from "express"
import { googleSignIn, loginUser, logoutUser, registerUser } from "../controllers/authController.js"

const router = express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/google").post(googleSignIn)
router.route("/logout").post(logoutUser)

export default router