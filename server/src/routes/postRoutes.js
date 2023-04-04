import { Router } from "express";
import { createPost } from '../controllers/postController'

export const router = Router();

router.post('/create', upload.array('images'), createPost);