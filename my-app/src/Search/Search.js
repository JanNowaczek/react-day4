import React from 'react'

import TextField from '@material-ui/core/TextField'

class Search extends React.Component {
    state = {
        searchTerm: 'asad'
    }

    onSearchTermChange = event => this.setState({ 
        searchTerm: event.target.value
    })

    render(){
        return(
            <div>
                <TextField
                    value={this.state.searchTerm}
                    onChange={this.onSearchTermChange} 
                    fullWidth={true}
                />

            </div>
        )
    }
}

export default Search