import { combineReducers } from 'redux';
import unauthenticatedReducer from './unauthenticated/unauthenticatedReducer';
import authenticationReducer from './Authentication/AuthenticationReducer';

const rootReducer = combineReducers({
    unauthenticated : unauthenticatedReducer,
    authentication : authenticationReducer
});

export default rootReducer;