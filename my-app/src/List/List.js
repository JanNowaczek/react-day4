import React from 'react'

class List extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState ({ isError: true}))
            .finally(() => this.setState({isLoading: false}))
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