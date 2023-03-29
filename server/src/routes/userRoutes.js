const { Router } = require("express");
const { registerUser, authenticateUser, confirmUser, userProfile, forgottenPassword, newUserPassword } = require("../controllers/userController.js ");

const router = Router();

router.post("/register-user", registerUser);
router.get("/user-profile/:id", userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate-user", authenticateUser);
router.put("/forgotten-password", forgottenPassword)
router.get("/forgotten-password/:token", newUserPassword);

module.exports = router;