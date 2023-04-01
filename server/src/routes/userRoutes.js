import { Router } from "express";
import { registerUser, authenticateUser, confirmUser, userProfile, forgottenPassword, checkUserToken, newUserPassword } from "../controllers/userController.js ";

const router = Router();

router.post("/register", registerUser);
router.get("/profile/:id", userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate", authenticateUser);
router.put("/forgotten-password", forgottenPassword);
router.get("/check-token", checkUserToken);
router.get("/forgotten-password/:token", newUserPassword);

module.exports = router;