import Comment from '../models/Comment.js'
import create from '../services/commentService.js';


// const createComment = async (payload, place, docId, socketId) => {
//     const { body, attached, author } = payload;
//     const newComment = new Comment({ body, attached, author, socketId });
    
//         if (place === 'comment') {
//         newComment.replieOf = docId;
//         } else {
//         newComment.post = docId;
//         }
    
//         await newComment.save();
//         const comment = await newComment.populate('author', 'username').execPopulate();
    
//         return comment;
// };

const createComment = async (req, res) => {
    
    const { body } = req.body;
    const { id, place } = req.params;
    const author = req.params.user._id
    console.log(author)
    try {
        const comment = await commentServices.create(body, place, id, author);
        res.json(comment)
    } catch (error) {
        if (error.message === 'no-doc')
            res.status(404).json({msg:'doc not found'});
        return res.status(500).json({ message: error.message });
    }
};

const updateComment = async (req, res) => {
    const body = req.body;
    const { id } = req.params;


    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            res.status(404).json({msg: 'Comment not found'})
        }

        if (comment.author.toString() !== id) {
            return response.error(req,res,'You dont have permission to update this comment',401);
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            { _id: id },
            { ...body },
            { new: true }
        );

        res.status(201).json({msg:'Comment modified successfully', updatedComment});
    } catch (error) {
        res.status(500).json({msg:'Contact Admin'})
    }
};
const replyComment = async (req, res) => {
    const authorId = req.params.user._id;
    const { id } = req.params;
    const { message } = req.body;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comment not found', 404);
        }

        const reply = await new Comment({
            author: authorId,
            body: message
        }).save();

        await Comment.findByIdAndUpdate(
            id,
            { $push: { replies: reply.id } },
            { new: true }
        );

        return res.status(200).json({msg: 'Reply comment update Successfully'});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteComment = async (req,res) =>{
    const {id} = req.params
    

};
// const getComments = async (place, docId) => {
//     let query = { post: docId };
//     if (place === 'comment') {
//         query = { replieOf: docId };
//     }
//     const comments = await Comment.find(query).populate('author', 'username');
//     return comments;
// };

export { 
    updateComment, 
    createComment, 
    // getComments,
    replyComment
}