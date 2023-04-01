import {model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: true //TODO: CAMBIAR EN PRODUCCIÓN
    },
    img_avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
    bio: {
        type: String,
        maxlength: 200
    },
    location: {
        type: String
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    },
    {
    toObject: { virtuals: false }, //console
    toJSON: { virtuals: true }, //res
    timestamps: true,
    versionKey: false
    }
);

const User = model('User', UserSchema);

module.exports = User;
