import { Router } from "express";
import {createPost} from '../controllers/postController'

const router = Router();

router.post('/posts', upload.array('images'), createPost);



module.exports = router;