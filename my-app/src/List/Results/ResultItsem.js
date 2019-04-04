import React from 'react'

const ResultsItem = ({user}) => (
    <div>
        {user.name.first} {user.name.last}
    </div>

)

export default ResultsItem