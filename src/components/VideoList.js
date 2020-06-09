import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videoList}) {


    return (
        videoList.map((video,index) => <VideoItem key={index} video={video}/>)
    )
}

export default VideoList
