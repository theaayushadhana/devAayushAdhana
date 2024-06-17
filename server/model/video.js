import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
      title: {
         type:String,
         requried:true,
      },
      videoId: {
        type: String,
        required: true,
      },
});

// module.exports = mongoose.model('Video' , VideoSchema);
const Video = mongoose.model('Video', VideoSchema);
export default Video;