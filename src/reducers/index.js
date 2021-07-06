import { combineReducers } from 'redux';

import counterReducer from './counter';
import loggedReducer from './isLogged';

const reducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default reducers;