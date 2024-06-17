import express from 'express';
const router = express.Router();
import Post from '../model/Post.js';
// GET POSTs

router.get('/' , async(req , res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//   router.post('/api/posts', upload.single('file'), async (req, res) => {
//     try {
        
//         const file = req.file;
  
//         // Process the file as needed (e.g., save it to MongoDB)
  
//         res.status(201).send('File uploaded successfully');
//     } catch (error) {
//         res.status(500).json({ error: 'Error uploading file' });
//     }
//   });


//   ADD POST
// router.post('/', upload.single('imageUrl'), async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         const imageUrl = req.file ? req.file.path : null; 

//         const newPost = new Post({ title, content, imageUrl });
//         const savedPost = await newPost.save();
//         res.status(201).json(savedPost);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
// Exporting router

export default router;









