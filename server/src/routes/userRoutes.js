import express from "express";
import { registerUser, authenticateUser, confirmUser, userProfile, forgottenPassword, newUserPassword } from "../controllers/userController.js ";

const router = express.Router();

router.post("/register-user", registerUser);
router.get("/user-profile/:id", userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate-user", authenticateUser);
router.put("/forgotten-password", forgottenPassword)
router.get("/forgotten-password/:token", newUserPassword);

export default router;

