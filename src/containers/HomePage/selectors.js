import { createSelector } from 'reselect';

const homePageReducerState = (globalState) => globalState.homePageReducer;

export const makeSelectUsers = createSelector(
    homePageReducerState,
    (homePage) => homePage.users
);