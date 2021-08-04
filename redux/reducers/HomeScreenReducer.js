import * as ActionTypes from '../ActionTypes';

// const INITIAL_STATE = {
//   DATA :[
//           {id:1,  name: "Comunity",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
//           {id:2,  name: "Housing",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
//           {id:3,  name: "Jobs",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//           {id:4,  name: "Personal",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//           {id:5,  name: "For sale",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//         ]
// };
const INITIAL_STATE = {
  DATA :[
        ],
  isLoading: false
};

export const homeScreenReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type){
        case ActionTypes.HOME_SCREEN_GET_DATA:
          console.log(action.payload)
            return { ...state, DATA: action.payload};
        case ActionTypes.HOME_SCREEN_TOGGLE_LOADING:
          console.log("loading is " + state.isLoading)
          return {...state, isLoading:!state.isLoading}
        default:
            console.log("Not a homeScreenReducer action")
            return state;
    }

}
