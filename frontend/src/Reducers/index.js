import userReducer from './userReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
    user: userReducer
});

export default Reducers;