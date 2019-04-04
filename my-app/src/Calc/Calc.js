import React from 'react'

class Calc extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    result: null,
  }

  changeNumber1 = event => this.setState({ number1: Number(event.target.value) })
  changeNumber2 = event => this.setState({ number2: Number(event.target.value) })

  add = () => this.setState({
    result: this.state.number1 + this.state.number2
  })
  subtract = () => this.setState({
    result: this.state.number1 - this.state.number2
  })
  divide = () => this.setState({
    result: this.state.number1 / this.state.number2
  })
  multiply = () => this.setState({
    result: this.state.number1 * this.state.number2
  })

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.number1}
            onChange={this.changeNumber1}
          />
          <input
            value={this.state.number2}
            onChange={this.changeNumber2}
          />
        </div>
        <div>
          {this.state.result}
        </div>
        <div>
          <button
            onClick={this.add}
          >
            +
          </button>
          <button
            onClick={this.subtract}
          >
            -
          </button>
          <button
            onClick={this.divide}
          >
            /
          </button>
          <button
            onClick={this.multiply}
          >
            *
          </button>
        </div>
      </div>
    )
  }
}

export default Calc