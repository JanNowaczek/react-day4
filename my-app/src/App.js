import React from 'react';

import Counter from './Counter'
import Calc from './Calc'

class App extends React.Component {
  render(){
    return(
      <div>
          <Counter />
          <Calc />

      </div>
    )
  }
}


export default App;
