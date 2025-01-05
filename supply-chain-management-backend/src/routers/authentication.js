import express from "express";
import { login, registerUser, resetPassword } from "../controllers/userCtrl.js"

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/reset-password", resetPassword);


export default router