import React, { Component } from 'react'
import './App.css'
import {Grid} from '@material-ui/core'
import { SearchBar,Video, VideoList} from './components'
import yt from './api/yt'

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             videos: [],
             selectedVideo: null
        }
    }

    handleApi = async(query) => {
        const response = await yt(query)
        // console.log(response)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state.video ,this.state.selectedVideo)
    }

    render() {
        return (
            <div>
                <Grid justify="center" container grid={10}> 
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <SearchBar handleApi={this.handleApi} />
                            </Grid>
                            <Grid item xs={8}>
                                <Video video={this.state.selectedVideo}/> 
                            </Grid>
                            <Grid item xs={12}>
                                <VideoList videoList={this.state.videos}/>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App
