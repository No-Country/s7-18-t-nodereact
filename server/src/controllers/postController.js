import Post from '../models/Post.js';

const createPost = async (req, res) => {
  //const id = req.user.id;
  const { title, description, category, difficulty, ingredients, preparation, portions, country } = req.body;
  const images = req.files;

  try {
    let post = new Post({
      //author: id, //por el momento comentado para hacer las pruebas.
      title,
      description,
      category,
      difficulty,
      ingredients,
      preparation,
      portions,
      country,
      images: images.map((image) => image.filename) //por el momento comentado para hacer las pruebas.
    });

    await post.save()

    //await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });

    res.send(post);
  } catch (error) {
    console.log(error.message);
  }
};

const getPostByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await Post.find({ author: userId }).populate('author');
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los posts del usuario' });
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, images, category, difficulty, ingredients, preparation, portions, country } = req.body;
  //const images = req.files;

  try {
    let modifiedPost = await Post.findOneAndUpdate(
      { _id: id },
      { title, description, images, category, difficulty, ingredients, preparation, portions, country }
    );

    if (!modifiedPost) {
      return res.send({ message: "Esta publicación no existe." })
    }
    let post = await Post.findById({ _id: id });
    res.send(post);
  } catch (error) {
    console.log(error.message);
  }
}
const likePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    // Verificar si el usuario ya dio like al post
    const alreadyLiked = post.likes.some(
      (like) => like.user.toString() === userId
    );

    if (alreadyLiked) {
      return res.status(400).json({ message: "Post ya tiene me gusta" });
    }

    // Agregar el like al post
    post.likes.push({ user: userId });
    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const unlikePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    // Verificar si el usuario no ha dado like al post
    const notLiked = post.likes.every(
      (like) => like.user.toString() !== userId
    );

    if (notLiked) {
      return res.status(400).json({ message: "Post no tiene me gusta" });
    }

    // Remover el like del post
    post.likes = post.likes.filter((like) => like.user.toString() !== userId);
    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export { createPost, updatePost, getPostByUserId, likePost, unlikePost }
