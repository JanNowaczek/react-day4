import React from 'react'

const ResultsItem = (props) => (
    <div>
        {props.user.name.first} {props.user.name.last}
    </div>

)

export default ResultsItem