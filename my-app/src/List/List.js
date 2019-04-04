import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Results from './Results/Results'

class List extends React.Component {

    
render() {
    return (
        <div>
            {
                this.props.isError ?
                    //'Error'
                    <Error />
                    :
                    this.props.isLoading ?
                        //'Loading'
                        <Loading />
                        :
                        !this.props.users ?
                            //'Data not loaded yet'
                            <NotLoaded />
                            :
                            this.props.users.length === 0 ?
                                //'No users found'
                                <NoUsers />
                                :
                                <Results
                                    data={this.props.users}
                                />

            }
        </div>
    )
}
}


export default List;