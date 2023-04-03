import { model, Schema } from 'mongoose';

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        images: [{
            type: String
        }],
        active: {
            type: Boolean,
            default: true
        },
    },
    {
        toObject: { virtuals: true },//En true , get canal especifico devuelve el conteo de reaccciones y commetnarios
        toJSON: { virtuals: true },
        timestamps: true,
        versionKey: false
    }
);
postSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post'
});


// postSchema.virtual('like', {
//     ref: 'reaction',
//     localField: '_id',
//     foreignField: 'post',
//     match: { type__Reaction: "apoyar" }
// });


// const reactions = ['megusta', 'meinteresa', 'apoyar', 'hacergracia'];

// reactions.forEach((reaction) => {
//     postSchema.virtual(reaction, {
//         ref: 'reaction',
//         localField: '_id',
//         foreignField: 'post',
//         match: { type__Reaction: reaction },
        
//     });
// });

// postSchema.methods.toJSON = function idSetter() {
//     const { _id, ...Post } = this.toObject();
//     Post.id = _id;
//     return Post;
// };

const Post = model('post', postSchema);

export default Post;

