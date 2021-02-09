import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseTabs from './navigation/BaseStackNavigator'
import { NavigationContainer } from '@react-navigation/native';
//import {Provider} from 'react-redux';
//import {createStore,combineReducers} from 'redux';
//import ProfileReducer from './store/reducers/ProfileReducer'


export default function App() {
  return (
   
    <NavigationContainer>
      <BaseTabs/>
    </NavigationContainer>
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
