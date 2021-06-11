import * as ActionTypes from '../ActionTypes';

const INITIAL_STATE = {
    current:["Harry","Another User"],
    numbers:[1233,1112,1256],
    profilePicUri : "https://picsum.photos/1000/1000",
    profileName : "Name Goes Here there and all",
    tags : ['Designer' , 'Teacher' , 'Trainer'],
    stats : {
        hired : 10,
        worked : 12,
        activeDays : 67
    },
    phoneNumber : "1234567890",
    location : "Hyderabad",
    jobTitle : "Designer",
    email : "testertesting0110@gmail.com",
    online : true
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