import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function Video({video}) {
    
    if(!video) return <div>Loading</div>
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <React.Fragment>
                <Paper elevation={2} style={{height: "70%"}}> 
                    <iframe frameBorder="0" height="100%" width="100%" title="Searched video" src={videoSrc} />
                </Paper>
                <Paper elevation={2} style={{paddding:"15px"}}>
                    <Typography variant="h4">{video.snippet.title}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        </div>
    )
}

export default Video
