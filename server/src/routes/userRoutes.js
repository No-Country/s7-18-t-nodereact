import { Router } from "express";
import authMiddleware from "../middlewares/auth.js";
import { registerUser, authenticateUser, confirmUser, userProfile, forgottenPassword, newUserPassword, addSavedPost, addFavoritePost, followUser } from "../controllers/userController.js ";

const router = Router();

router.post("/register", registerUser);
router.get("/profile/:id", authMiddleware, userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate", authenticateUser);
router.put("/forgotten-password", forgottenPassword);
router.get("/forgotten-password/:token", newUserPassword);
router.post('/:userId/saved-posts', addSavedPost);
router.post('/:userId/favorite-posts', addFavoritePost);
router.post('/:userId/follow', followUser);

/**
 * @openapi
 * /api/v1/user/register:
 *   post:
 *     summary: Creates a new user into app's database.
 *     requestBody:
 *       description: Required fields to create a new user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
 *     tags:
 *       - [Auth]
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: User registered successfully!
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: Logs an user into the app.
 *     requestBody:
 *       description: Required fields to log in an user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     tags:
 *       - [Auth]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             $ref: '#/components/schema/loginResponse'
 *       400:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found / Something went wrong / No email or password provided
 */


export default router;
