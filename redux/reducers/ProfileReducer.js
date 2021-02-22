import { CHANGE_NAME } from "../ActionTypes";

const INITIAL_STATE = {
    current:["Harry","Another User"],
    numbers:[1233,1112,1256],
};

export const ProfileReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case CHANGE_NAME:
            const newName = state.current
            newName[0] = "Harish"
            return { ...state, current : newName}; 

        default:
            return state 
            break;

    }
    
}