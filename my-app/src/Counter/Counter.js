import React from 'react'

class Counter extends React.Component {
    state = {
        number: 0
    }

    inc = () => this.setState({ number: this.state.number + 1 })

    render() {
        return (
            <div>
                <div>
                    <h1>
                        {this.state.number}
                    </h1>
                </div>

                <button
                    onClick={this.inc}
                >
                    +
                </button>
            </div>
        )
    }
}



export default Counter