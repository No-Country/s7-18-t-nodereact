
import Post from '../models/Post.js';

const createPost = async (req, res) => {
    //const id = req.user.id;
    const { title, description } = req.body;
    //const images = req.files;

    try {
        let post = new Post({
            //author: id, //por el momento comentado para hacer las pruebas.
            title,
            description,
            //images: images.map((image) => image.filename) //por el momento comentado para hacer las pruebas.
        });

        await post.save()

        res.send( post );
    } catch (error) {
        console.log(error.message);
    }
}

export { createPost }