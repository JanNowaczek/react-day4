import React from 'react'

import List from '../List'
import Search from '../Search'

class Users extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
        searchTerm: ''
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api/?results=10')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    onSearchTermChange = event => this.setState({
        searchTerm: event.target.value
    })


    render() {
        const filterUsers = (
            this.state.users &&
            this.state.users.filter &&
            this.state.users.filter(
                () => true
            )
        )

        return (
            <div>
                <Search
                    searchTerm={this.state.searchTerm}
                    onSearchTermChange={this.onSearchTermChange}
                />
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