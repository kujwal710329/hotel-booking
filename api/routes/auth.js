import express from "express";
import { login, register, logout } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// creates a new router object
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.get("/logout", verifyUser, logout);

export default router;
