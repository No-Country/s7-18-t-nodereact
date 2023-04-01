import { Post } from '../models';

const createPost = async (req, res, next) => {
    const id = req.user.id;
    const { title, description } = req.body;
    const images = req.files;

    try {
        const post = new Post({
            author: id,
            title,
            description,
            images: images.map((image) => image.filename)
        });

        await post.save()

        res.status(201).json({
            success: true,
            message: 'Post creado con éxito',
            post,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    createPost
}