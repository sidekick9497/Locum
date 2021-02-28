import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { profileReducer } from "./reducers/ProfileReducer";
import { themeReducer } from './reducers/ThemeReducer';
import { searchReducer } from './reducers/SearchReducer';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            profileReducer : profileReducer,
            themeReducer : themeReducer,
            searchText : searchReducer
            
        }),
        // applyMiddleware(thunk , logger)
        applyMiddleware(thunk)

    )
    return store;
}