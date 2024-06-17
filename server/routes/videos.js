
import express from 'express'
const router = express.Router();
import Video from '../model/video.js';
// GET ALL VIDEOS
router.get('/' , async(req , res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(400).json({error: error});
    }
})

// Add new video

router.post('/' , async(req , res) => {
    try {
        const newVideo = new Video(req.body);
        const savedVideo = newVideo.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        
        res.status(400).json({error: error});
    }
})

// module.exports = router;
export default router;