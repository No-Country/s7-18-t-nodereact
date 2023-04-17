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
    removeFavoriteUser,
    // getUser
} from "../controllers/userController.js ";

const router = Router();

router.post("/register", registerUser); // YA
router.get("/confirm/:token", confirmUser); //YA
router.post("/authenticate", authenticateUser); //YA
router.put("/forgotten-password", forgottenPassword); //YA
router.get("/forgotten-password/:token", newUserPassword); //YA
router.get("/profile/:userId", authMiddleware, userProfile); // YA, FALTA EL OBJETO QUE DEVUELVE
router.post('/:userId/saved-posts', authMiddleware, addSavedPost); //YA
router.post('/:userId/favorite-posts', authMiddleware, addFavoritePost); //YA
router.post('/:userId/follow', authMiddleware, followUser);
router.delete('/:userId/unfollow/:userToUnfollowId', authMiddleware, unfollowUser);
router.get('/:userId/following', authMiddleware, getFollowing);
router.post('/:userId/favorite-users', authMiddleware, addFavoriteUser);
router.delete('/:userId/favorite-users', authMiddleware, removeFavoriteUser);
// router.get('/', getUser)

/**
 * @openapi
 * /api/v1/users/register:
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
 *       - [Users]
 *     responses:
 *       201:
 *         description: Created success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/registerResponse'
 *       200:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Usuario ya registrado
 * /api/v1/users/authenticate:
 *   post:
 *     summary: Logs an user into the app.
 *     requestBody:
 *       description: Required fields to log in an user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: andres@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     tags:
 *       - [Users]
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
 * /api/v1/users/confirm/{token}:
 *   get:
 *     summary: Completes email confirmation to authorize user.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: Token
 *     tags:
 *       - [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario confirmado correctamente
 *       401:
 *         description: Invalid token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token inválido
 * /api/v1/users/forgotten-password:
 *   put:
 *     summary: Receives a user email address and sends back and email to set up a new password.
 *     requestBody:
 *       description: Required information to reset the password.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: andres@gmail.com
 *     tags:
 *       - [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se ha enviado un email con las instrucciones para cambiar la contraseña
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
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /api/v1/users/forgotten-password/{token}:
 *   get:
 *     summary: Allows the user to create a new password.
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: Token
 *     requestBody:
 *       description: Required fields to set up a new user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: password123
 *     tags:
 *       - [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contraseña modificada correctamente
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
 * /api/v1/users/profile/{userId}:
 *   get:
 *     summary: Returns a user profile based on the ID provided.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: User ID
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: ID
 *     tags:
 *       - [Users]
 *     responses:
 *       201:
 *         description: Created success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/user-profile'
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
 * /api/v1/users/{userId}/saved-posts:
 *   post:
 *     summary: Adds a post to the user's Saved Posts list.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: User ID
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: User ID
 *     requestBody:
 *       description: Required fields to set up a new user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *                 example: nisdfusi0239239
 *     tags:
 *       - [Users]
 *     responses:
 *       201:
 *         description: Created success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Publicación guardada correctamente
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 * /api/v1/users/{userId}/favorite-posts:
 *   post:
 *     summary: Adds a post to the user's Favorite Posts list.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: User ID
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: User ID
 *     requestBody:
 *       description: Required fields to set up a new user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *                 example: nisdfusi0239239
 *     tags:
 *       - [Users]
 *     responses:
 *       201:
 *         description: Created success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Publicación añadida a favoritos correctamente
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


export default router;
