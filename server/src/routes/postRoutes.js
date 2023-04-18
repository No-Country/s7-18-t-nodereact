import express from 'express';
import { createPost, getPostByUserId, updatePost, likePost, unlikePost, getTopPosts, getPostsByDate } from '../controllers/postController.js';



const router = express.Router();

router.post('/', createPost);
router.put('/:id', updatePost);

router.get('/:userId/posts', getPostByUserId);
router.post('/:id/like', likePost);
router.delete('/posts/:id/unlike', unlikePost);
router.get('/posts/top', getTopPosts);
router.get('/posts/ordered', getPostsByDate);

export default router;