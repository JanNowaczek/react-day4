import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

const List = (props) => (
    <div>
        {
           props.isError ?
                //'Error'
                <Error />
                :
                props.isLoading ?
                    //'Loading'
                    <Loading />
                    :
                    !props.users ?
                        //'Data not loaded yet'
                        <NotLoaded />
                        :
                        props.users.length === 0 ?
                            //'No users found'
                            <NoUsers />
                            :
                            <Results
                                data={props.users}
                            />

        }
    </div>
)



export default List;