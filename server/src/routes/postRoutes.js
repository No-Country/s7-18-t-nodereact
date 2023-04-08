import express from 'express';
import { createPost, getPostByUserId } from '../controllers/postController.js';
import upload from "../middlewares/multer.js";
import { addSavedPost } from '../controllers/userController.js';

const router = express.Router();

router.post('/', upload.array('images'), createPost);

router.get('/:userId/posts', getPostByUserId)

export default router;