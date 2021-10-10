import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    myUsers: users
}))

export const HomePage = (props) => {
    const { myUsers } = useSelector(stateSelector);

    console.log("Users :", myUsers);

    return <div> Hello World! </div>
}