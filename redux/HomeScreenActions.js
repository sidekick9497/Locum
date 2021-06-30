import {getHomeScreenData,toggleHomeScreenLoading} from './ActionCreators';
import client from '../apiAuth/guestClient';
// const DATA =[
export function HomeScreenActions() {
    return dispatch => {
      dispatch(toggleHomeScreenLoading())
      client.get('/suggestions')
      .then(function (response) {
      dispatch(getHomeScreenData(response.data));
      dispatch(toggleHomeScreenLoading())
      console.log("response in next line")
      console.log(response.data)
      })

    }
}
