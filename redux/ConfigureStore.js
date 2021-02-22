import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { profileReducer } from "./reducers/ProfileReducer";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            profileReducer : profileReducer
        }),
        applyMiddleware(thunk , logger)
    )
    return store;
}