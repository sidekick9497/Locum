import {setSelectedUser,toggleSelectedUserLoading,toggleSelectedUserHistoryLoading,setSelectedUserHistory} from '../../ActionCreators';
import client from '../../../apiAuth/guestClient';
// const DATA =[
export function SelectedUserActions() {
    // for loading the demographics
    return dispatch => {
      dispatch(toggleSelectedUserLoading())
      client.get('/selectedUsers/1')
      .then(function (response) {
      dispatch(setSelectedUser(response.data.demographics));
      dispatch(toggleSelectedUserLoading())
      console.log("response of selectedUserHistory")
      console.log(response.data)
      })
      //for loading the history
      dispatch(toggleSelectedUserHistoryLoading())
      client.get('/contractHistory/1')
      .then(function (response) {
      dispatch(setSelectedUserHistory(response.data.history));
      dispatch(toggleSelectedUserHistoryLoading())
      console.log("response of selected user history")
      console.log(response.data)
      })

      // we will add one more for loading the ETA timings.
    }
}
