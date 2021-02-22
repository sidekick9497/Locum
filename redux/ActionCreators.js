import * as ActionTypes from './ActionTypes';

export const changeName = (name) => ({
    type:ActionTypes.CHANGE_NAME,
    payload:name
});