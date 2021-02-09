import {CHANGE_NAME} from '../actions/ProfileActions'
const INITIAL_STATE = {
    current:["Harry","Another User"],
    numbers:[1233,1112,1256],
};

const profileReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case CHANGE_NAME:
            const newName = state.current
            newName[0] = "Harish"
            return { ...state, current:newName}; 

        default:
            return state 
            break;

    }
    
}

export default profileReducer