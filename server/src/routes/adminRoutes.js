import { Router } from "express";
import { registerAdmin, adminProfile, confirmAdmin, authenticateAdmin, forgottenPassword, checkAdminToken, newAdminPassword } from "../controllers/adminController";


const router = Router();

router.post("/register", registerAdmin);
router.get("/profile", adminProfile);
router.put("/confirm", confirmAdmin);
router.put("/authenticate", authenticateAdmin);
router.put("/forgotten-password", forgottenPassword);
router.get("/check-token", checkAdminToken);
router.put("/new-password", newAdminPassword);



module.exports = router;