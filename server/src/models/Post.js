import { model, Schema } from 'mongoose';

const degreesDifficulty = ["Fácil", "Regular", "Difícil"];

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
        category: {
            type: [String]
            //required: true //en Postman: "category": ["a", "b", "c", "d"]
        },
        difficulty: {
            type: String,
            enum: degreesDifficulty,
            required: true
        },
        ingredients: {
            type: [String]
        },
        preparation: {
            type: [String]
        },
        portions: {
            type: String
        },
        country: {
            type: String,
            required: true
        },
        images: {
            type: [String]
        },
        likes: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        socketId: {
            type: String
        }
    },
    {
        toObject: { virtuals: true },//En true , get canal especifico devuelve el conteo de reaccciones y commetnarios
        toJSON: { virtuals: true },
        timestamps: true,
        versionKey: false,
        id: false //para que no aparezca el id (si se emilina, aparece un atributo _id y otro id, que tienen el mismo identificador)
    }
);
postSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post'
});


/*postSchema.virtual('like', {
     ref: 'reaction',
     localField: '_id',
    foreignField: 'post',
    match: { type__Reaction: "apoyar" }
});*/


/*postSchema.methods.toJSON = function idSetter() {
     const { _id, ...Post } = this.toObject();
     Post.id = _id;
     return Post;
};*/

/* Recursos para lo de la imagen:
https://stackoverflow.com/questions/47669458/upload-image-using-postman
https://stackoverflow.com/questions/60489141/strategy-for-uploading-images-to-mongodb-atlas-with-multer
https://www.postman.com/postman/workspace/postman-answers/documentation/13455110-00378d5c-5b08-4813-98da-bc47a2e6021d
*/

const Post = model('post', postSchema);

export default Post;

