import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';


const videoList  = () => {
    const[videos, setVideos] = useState([]);
    const [selectedVideo , setSelectedVideo] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:3000/api/videos').then((response) => {
        setVideos(response.data)
      }).catch(error => {
         console.error('Error fetching videos' , error);
      })
    } , [])

    return(<>
      <div>
  {selectedVideo && <VideoPlayer videoId={selectedVideo} />}
  <ul>
    {Array.isArray(videos) && videos.map(video => (
      <li key={video._id} onClick={() => setSelectedVideo(video.videoId)}>{video.title}</li>
    ))}
  </ul>
</div>

 </>);
}

export default videoList;