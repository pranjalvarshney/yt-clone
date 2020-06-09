import React, { Component } from 'react'
import { Paper, TextField} from '@material-ui/core'

class SearchBar extends Component {
    
    state= {
        searchquery: "",
    }

    handleChange = (event) =>{
        this.setState({
            searchquery: event.target.value            
        })
        // console.log(this.state.searchquery)
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const { searchquery } = this.state
        this.props.handleApi(searchquery)
        
    }

    render() {

        const {searchquery} = this.state

        return (
            <div>
                <Paper elevation={1} style={{padding: "10px", marginLeft:"20px",marginRight:"20px", marginTop:"10px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label="Search" value={searchquery} onChange={this.handleChange}></TextField>
                    </form>
                </Paper>                
            </div>
        )
    }
}

export default SearchBar
