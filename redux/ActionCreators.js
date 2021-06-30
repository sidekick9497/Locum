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
export const getHomeScreenData = (data)=>({
  type:ActionTypes.HOME_SCREEN_GET_DATA,
  payload:data
  })
export const toggleHomeScreenLoading = () => ({
  type:ActionTypes.HOME_SCREEN_TOGGLE_LOADING,
  payload:null
})
