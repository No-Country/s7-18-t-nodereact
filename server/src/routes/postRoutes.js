import express from 'express';
import { createPost, getPostByUserId, updatePost, likePost } from '../controllers/postController.js';
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post('/', upload.array('images'), createPost);
router.put('/:id', updatePost);

router.get('/:userId/posts', getPostByUserId)
router.post('/:id/like', likePost);

export default router;