import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { ProfileReducer } from "../redux/reducers/ProfileReducer";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            ProfileReducer : ProfileReducer
        }),
        applyMiddleware(thunk , logger)
    )
    return store;
}