import { searchText } from '../ActionCreators';
import * as ActionTypes from '../ActionTypes';

let searchTexts = {
    HomeScreenSearch : ''
}

export const searchReducer = (state = searchTexts , action) => {
    switch (action.type) {
        case ActionTypes.HOME_SEARCH_TEXT:
            searchTexts.HomeScreenSearch = action.payload
            return {...state , current : searchTexts}
        default:
            return state;
    }
}
