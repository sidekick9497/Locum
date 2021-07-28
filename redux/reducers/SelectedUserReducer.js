import * as ActionTypes from '../ActionTypes';

const INITIAL_STATE = {
    demographics: {name:"john doe", charges:"500",image:"https://img.icons8.com/color/100/000000/real-estate.png",online:true},
    contractHistory:[{name:"john long",charged:"1200",date:"12/31/2021"},
    {name:"second user",charged:"1200",date:"12/31/2021"}],
    ETA:"15 minutes",
    isLoading: false,
    isHistoryLoading:false,
    isETALoading:false};

export const selectedUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_USER:
            return { ...state, demographics: action.payload }
        case ActionTypes.SELECTED_USER_TOGGLE_LOADING:
            console.log("loading is " + state.isLoading)
            return { ...state, isLoading: !state.isLoading }
        case ActionTypes.SELECTED_USER_HISTORY:
            console.log(action.payload)
            return { ...state, contractHistory: action.payload };
        case ActionTypes.SELECTED_USER_HISTORY_LOADING:
            return { ...state, isHistoryLoading: !state.isHistoryLoading }

        default:
            console.log("Here we are")
            return state;
    }
}