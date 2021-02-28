import * as ActionTypes from '../ActionTypes';

const INITIAL_STATE = {
    current:["Harry","Another User"],
    numbers:[1233,1112,1256],
};

export const profileReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case ActionTypes.CHANGE_NAME:
            return { ...state, current : action.payload};

        default:
            return state;
    }
    
}