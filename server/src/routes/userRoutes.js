import { Router } from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  registerUser,
  authenticateUser,
  confirmUser,
  userProfile,
  forgottenPassword,
  newUserPassword,
  addSavedPost,
  addFavoritePost,
  followUser,
  unfollowUser,
  getFollowing,
  addFavoriteUser,
  removeFavoriteUser
} from "../controllers/userController.js ";

const router = Router();

router.post("/register", registerUser); // YA
router.get("/profile/:id", authMiddleware, userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate", authenticateUser); //YA
router.put("/forgotten-password", forgottenPassword);
router.get("/forgotten-password/:token", newUserPassword);
router.post('/:userId/saved-posts', addSavedPost);
router.post('/:userId/favorite-posts', addFavoritePost);
router.post('/:userId/follow', followUser);
router.delete('/:userId/unfollow/:userToUnfollowId', unfollowUser);
router.get('/:userId/following', getFollowing);
router.post('/:userId/favorite-users', addFavoriteUser);
router.delete('/:userId/favorite-users', removeFavoriteUser);

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
 *               $ref: '#/components/schema/registerResponse'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Usuario ya registrado
 * /api/v1/user/authenticate:
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
 *             schema:
 *               $ref: '#/components/schema/loginResponse'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El usuario no existe
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La contraseña es incorrecta
 * /api/v1/user/confirm/{token}:
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
 *             schema:
 *               $ref: '#/components/schema/loginResponse'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El usuario no existe
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: La contraseña es incorrecta
 */

export default router;
