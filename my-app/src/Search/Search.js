import React from 'react'

import TextField from '@material-ui/core/TextField'

const Search = (props) => (

    <div>
        <TextField
            value={props.searchTerm}
            onChange={props.onSearchTermChange}
            fullWidth={true}
        />
    </div>
)


export default Search