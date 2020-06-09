import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

function VideoItem({video}) {
    return (
        <div>
            <Grid item xs={12}>
                <Paper style={{display:"flex",alignItems:"center"}}>
                    <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{marginRight:"15px"}}/>
                </Paper>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Grid>
        </div>
    )
}

export default VideoItem
