import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import { StyleSheet, View,Button, ScrollView, useColorScheme } from 'react-native';
import Search from '../core/Search';
import {Appearance} from 'react-native-appearance'
import BaseListView from '../core/BaseListView'
import { Text } from 'react-native-elements';
import {BottomSheet} from '../core/BottomSheet';
import BottomUserView from '../core/BottomUserView'

import client from '../../apiAuth/guestClient';
// const DATA =[
//         {id:1,  name: "Comunity",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
//         {id:2,  name: "Housing",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
//         {id:3,  name: "Jobs",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//         {id:4,  name: "Personal",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//         {id:5,  name: "For sale",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
//       ];
const HomeScreen = (props) => {
  const DATA = useSelector(state=>state.homeScreen.DATA)
  console.log(DATA)

  const [isVisible, setIsVisible] = useState(false);
  const openBottomSheet = ()=> {
    setIsVisible(true);
    client.get('/users/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  }
  const closeBottomSheet = () => {
    setIsVisible(false);
    console.log("hidding BottomSheet")
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Search searchText = {props.searchText} searchTextEvent = {props.searchTextEvent} />
      <Text h1>Recent</Text>
      <BaseListView listItemPress={openBottomSheet} DATA={DATA}/>
       <Text h1>Suggestions</Text>
      <BaseListView/>
      </ScrollView>
       <BottomUserView
          item={DATA[0]}
          isOpen={isVisible}
          openedPercentage={0.7}
          onClose={closeBottomSheet}>
        </BottomUserView>
      <Text style={styles.center}>
        sys theme : {useColorScheme()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  center : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  button: {
    width: 150,
    backgroundColor: 'indigo',
    padding: 10,
    borderRadius: 10,
  },
  gif: {
    flex: 1,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
  }
});

export default HomeScreen;
