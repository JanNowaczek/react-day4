import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Results from './Results/Results'

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
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                {
                    this.state.isError ?
                        //'Error'
                        <Error />
                        :
                        this.state.isLoading ?
                            //'Loading'
                            <Loading />
                            :
                            !this.state.users ?
                                //'Data not loaded yet'
                                <NotLoaded />
                                :
                                this.state.users.length === 0 ?
                                    //'No users found'
                                    <NoUsers />
                                    :
                                    <Results
                                        data={this.state.users}
                                    />

                }
            </div>
        )
    }
}


export default List;