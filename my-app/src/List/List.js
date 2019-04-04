import React from 'react'

class List extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        fetch('https://randomuser.me/api')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.users)}
            </div>
        )
    }
}


export default List;