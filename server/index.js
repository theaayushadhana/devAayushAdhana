import express, { Router } from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import cors from 'cors'
import postRoute from '../server/routes/postRoute.js'
import postsRoutes from './routes/posts.js';
import videosRoutes from './routes/videos.js';
dotenv.config();
const app  = express();
app.use(bodyParser.json());
app.use(cors());


// SETTING UP ROUTES

app.use('/api/posts'  , postsRoutes);
app.use('/api/videos' , videosRoutes);
app.use(postRoute);
app.get('/' , (req , res) => {
    res.send('Welcome to home page');
    
})


const port = process.env.PORT || 3000;

// CONNECTING WITH MONGO DB DATABASE 

mongoose.connect(process.env.MONGO_URL, {
 
})
  .then(() => console.log('Connected to MongoDB database successfully!'))
  .catch((error) => console.log('MongoDB server error:', error));

// CONNECTION FOR MONGO DB
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})