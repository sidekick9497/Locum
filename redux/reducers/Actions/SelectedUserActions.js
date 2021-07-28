import {setSelectedUser,toggleSelectedUserLoading,toggleSelectedUserHistoryLoading,setSelectedUserHistory} from './ActionCreators';
import client from '../../apiAuth/guestClient';
// const DATA =[
export function SelectedUserActions() {
    // for loading the demographics
    return dispatch => {
      dispatch(toggleSelectedUserLoading())
      client.get('/selectedUsers')
      .then(function (response) {
      dispatch(setSelectedUser(response.data));
      dispatch(toggleSelectedUserLoading())
      console.log("response of selectedUserHistory")
      console.log(response.data)
      })
      // for loading the history
      dispatch(toggleSelectedUserHistoryLoading())
      client.get('/contractHistory')
      .then(function (response) {
      dispatch(setSelectedUserHistory(response.data));
      dispatch(toggleSelectedUserHistoryLoading())
      console.log("response oh selected user history")
      console.log(response.data)
      })

      // we will add one more for loading the ETA timings.
    }
}
