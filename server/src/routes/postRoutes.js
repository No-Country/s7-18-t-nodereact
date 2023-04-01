import express from "express";
import {createPost} from '../controllers/postController.js';
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post('/posts',upload.array('images'), createPost);



export default router;

