import React from 'react'

import ResultsItem from './ResultItsem'

const Results = (props) => (
  <div>
    {
      props.data.map(
        user =>
          <ResultsItem
          key={user.login.uuid} 
            user={user}
          />
      )
    }
  </div>
)

export default Results