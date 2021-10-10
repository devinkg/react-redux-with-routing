import { createStore, combineReducers } from 'redux';
import homePageReducer from './containers/HomePage/reducers';

const reducers = combineReducers({ homePageReducer: homePageReducer });

export default createStore(reducers);