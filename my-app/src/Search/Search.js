import React from 'react'

import TextField from '@material-ui/core/TextField'

class Search extends React.Component {

    render() {
        return (
            <div>
                <TextField
                    value={this.props.searchTerm}
                    onChange={this.props.onSearchTermChange}
                    fullWidth={true}
                />
            </div>
        )
    }
}

export default Search