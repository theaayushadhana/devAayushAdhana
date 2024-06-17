// routes/postRoutes.js
import express from 'express';
const router = express.Router();
import Post from '../model/Post.js';

const restrictAccess = (req, res, next) => {
    const allowedIP = '132.154.59.253'; 
    
    if (req.ip === allowedIP) {
        return next();
    }
    res.status(403).json({ error: 'Unauthorized' });
};

router.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
       
         console.log(error);
    }
});


router.post('/api/posts', async (req, res) => {
    const { title, content, imageUrl } = req.body;

    try {
        const newPost = new Post({ title, content, imageUrl });
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
});


export default router;
