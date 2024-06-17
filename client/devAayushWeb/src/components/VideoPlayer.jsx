import React from "react";

const VideoPlayer = () => {
    const videoPlayer  = 'https://www.youtube.com/embed/${videoId}';


    return(<>
        <div>
            <iframe 
            width={560}
            height={315}
            src={videoPlayer}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Explore our web coursess"
            >
         
            </iframe>
        </div>
    </>)
}


export default VideoPlayer;