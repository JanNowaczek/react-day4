import React from 'react'

import List from '../List'

class Users extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api/?results=10')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }



    render() {
        return (
            <div>
                <List
                    users={this.state.users}
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                />
            </div>
        )
    }
}
export default Users