import * as ActionTypes from './ActionTypes';

export const changeName = (name) => ({
    type:ActionTypes.CHANGE_NAME,
    payload:name
});

export const changeTheme = (theme) => ({
    type:ActionTypes.APP_THEME,
    payload:theme
})

export const homeSearchText = (text) => ({
    type:ActionTypes.HOME_SEARCH_TEXT,
    payload:text
})