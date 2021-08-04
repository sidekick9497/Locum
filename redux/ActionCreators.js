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
export const setSelectedUser = (data)=>({
  type:ActionTypes.SELECTED_USER,
  payload:data
  })
export const toggleSelectedUserLoading = ()=>({
  type:ActionTypes.SELECTED_USER_TOGGLE_LOADING,
  payload:null
})
export const toggleSelectedUserHistoryLoading = () =>({
  type:ActionTypes.SELECTED_USER_HISTORY_LOADING,
  payload:null
})

export const setSelectedUserHistory = (data)=>({
  type:ActionTypes.SELECTED_USER_HISTORY,
  payload:data
  })
