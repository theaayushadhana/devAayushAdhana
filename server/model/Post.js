import mongoose from "mongoose";

// creating mongo db schema

const PostSchema  = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    content:{
        type: String,
        required:true,
    },
    imageUrl: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Post = mongoose.model('Post' , PostSchema);
export default Post;
