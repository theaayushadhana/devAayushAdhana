import React from "react";
import { useState } from "react";
import axios from "axios";

const VideoForm = () => {
    const [title, setTitle] = useState("");
    const[videoId , setVideoId] = useState("");

    // HANDLE SUBMIT
    const handleSubmit = async(e) => {
           e.preventDefault();
           try {
            const response = await axios.post('http://localhost:3000/api/videos' , {title , videoId});
            console.log('Video added' , response.data);
            setTitle('');
            setVideoId('');
           } catch (error) {
              console.error('Error adding video' , error);
           } 
    }
    return(<>
        <form onSubmit={handleSubmit}>
         <div>
             <label>Title:</label>
             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
         </div>
     
         <div>
             <label>VideoId:</label>
             <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} required></input>
         </div>
         <button type="submit">Add Video</button>
        </form>
     </>);
};



export default VideoForm;