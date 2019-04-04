import React from 'react'

import TextField from '@material-ui/core/TextField'

const Search = (props) => (

    <div>
        <TextField
            value={this.props.searchTerm}
            onChange={this.props.onSearchTermChange}
            fullWidth={true}
        />
    </div>
)


export default Search