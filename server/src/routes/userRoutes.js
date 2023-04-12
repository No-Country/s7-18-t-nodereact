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

router.post("/register", registerUser);
router.get("/profile/:id", authMiddleware, userProfile);
router.get("/confirm/:token", confirmUser);
router.post("/authenticate", authenticateUser);
router.put("/forgotten-password", forgottenPassword);
router.get("/forgotten-password/:token", newUserPassword);
router.post('/:userId/saved-posts', addSavedPost);
router.post('/:userId/favorite-posts', addFavoritePost);
router.post('/:userId/follow', followUser);
router.delete('/:userId/unfollow/:userToUnfollowId', unfollowUser);
router.get('/:userId/following', getFollowing);
router.post('/:userId/favorite-users', addFavoriteUser);
router.delete('/:userId/favorite-users', removeFavoriteUser);




export default router;
