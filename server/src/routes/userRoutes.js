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
} from "../controllers/userController.js ";

const router = Router();


router.post("/register", registerUser); // YA
router.get("/confirm/:token", confirmUser); //YA
router.post("/authenticate", authenticateUser); //YA
router.put("/forgotten-password", forgottenPassword); //YA
router.put("/forgotten-password/:token", newUserPassword); //modificado 
router.get("/profile/:userId", userProfile); // YA, FALTA EL OBJETO QUE DEVUELVE _deja de pedir token para ver el perfil.
router.post('/:userId/saved-posts', authMiddleware, addSavedPost); //YA
router.post('/:userId/favorite-posts', authMiddleware, addFavoritePost); //YA
router.post('/:userId/follow', authMiddleware, followUser);
router.delete('/unfollow/:userId', authMiddleware, unfollowUser);
router.get('/:userId/following', authMiddleware, getFollowing);
router.post('/:userId/favorite-users', authMiddleware, addFavoriteUser);
router.delete('/:userId/favorite-users', authMiddleware, removeFavoriteUser);


export default router;
