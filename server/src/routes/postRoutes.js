import { Router } from 'express';
import { createPost } from '../controllers/postController.js';
import upload from "../middlewares/multer.js";

export const router = Router();

router.post('/create', upload.array('images'), createPost);