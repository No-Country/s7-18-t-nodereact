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

        //await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });

        res.send( post );
    } catch (error) {
        console.log(error.message);
    }
};

const getPostByUserId = async(req, res) => {
    const userId = req.params.userId;
    try {
        const posts = await Post.find({author: userId}).populate('author');
        res.json(posts);
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los posts del usuario' });
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        let modifiedPost=await Post.findOneAndUpdate(
            {_id: id},
            {title,description}
        );

        if(!modifiedPost){
            return res.send({message: "Esta publicación no existe."})
        }
        let post= await Post.findById({_id:id});
        res.send(post);
    } catch (error) {
        console.log(error.message);
    }
}

export { createPost, updatePost, getPostByUserId }
