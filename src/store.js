import { createStore, combineReducers } from 'redux';
import homePage from './containers/HomePage/reducers';

const reducers = combineReducers({ homePage: homePage });

export default createStore(reducers);