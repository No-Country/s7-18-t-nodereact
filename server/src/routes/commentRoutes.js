import { Router } from "express";
import { createComment, updateComment } from "../controllers/commentController.js";

const router = Router();


router
    .post('/:id/:place', createComment)
    .put('/edit/:id', updateComment)
export default router;