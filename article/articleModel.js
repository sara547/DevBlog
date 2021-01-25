const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleModel = new Schema({
    title: {
        type: String,
        minLength: 5,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    photo: {
        type: String,
        default:'/public/uploads/myimg.png'
    },
    updatedAt: Date,
    likes: [String],
    comments: [{
        id: String,
        comment: String
    }],
    reads: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const articleModel = mongoose.model('Article', ArticleModel);
module.exports = articleModel;