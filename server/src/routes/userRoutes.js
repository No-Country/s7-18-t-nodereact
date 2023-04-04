import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { registerUser, authenticateUser, confirmUser, userProfile, forgottenPassword, newUserPassword } from "../controllers/userController.js ";

export const router = Router();

router.post("/register", registerUser);
router.get("/profile/:id", authMiddleware, userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate", authenticateUser);
router.put("/forgotten-password", forgottenPassword);
router.get("/forgotten-password/:token", newUserPassword);