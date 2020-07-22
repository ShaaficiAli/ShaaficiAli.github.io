import React from 'react';
import ReactPlayer from "react-player"
const Video =({video})=>{
    const VideoProp = video.map(vidprop => {
        return(
            <div className="videos">
                <h1>{vidprop.videoname}</h1>
                <ReactPlayer url = {vidprop.url}/>
            </div>
            )
        })
    return(
        <div className="Video-Prop">
            {VideoProp}
        </div>
    )
}
export default Video