import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {changeName} from '../store/actions/ProfileActions'


export default function ContactScreen() {
  /*const myState = useSelector(state => state)
  const value = myState.profiles.current[0]
  const dispatch = useDispatch()
  const nameChangeHandler = ()=>
  {
    dispatch(changeName())
  }*/
  return (
    <View style={styles.container}>
      <Text>Profile Screen is working</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
