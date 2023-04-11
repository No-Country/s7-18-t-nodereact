import {User,Comment} from '../models'

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

        res.status(201).json({msg:'Comment modified successfully'});
    } catch (error) {
        res.status(500).json({msg:'Contact Admin'})
    }
};

export { updateComment }