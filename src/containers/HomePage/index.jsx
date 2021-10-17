import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import Axios from 'axios';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    myUsers: users
}))

const actionDispatcher =(dispatch)=>({
    setUser:(users)=>dispatch(setUser(users))
})

export const HomePage = (props) => {
    const { myUsers } = useSelector(stateSelector);

    const fetchUsers = async () => {
        const response = await Axios.get("https://reqres.in/api/users").catch(err => {
            console.log("Error" + err)
        })
        console.log("Users: ", response.data.data);
    }

    useEffect(() => {
        fetchUsers(); // calling fetch user API //Test
        return () => { }
    }, [])

    return <div> Hello World! </div>
}