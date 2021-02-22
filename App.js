import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Controller from './components/Controller';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import { configureStore } from "./redux/ConfigureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Controller/>
      </NavigationContainer>
    </Provider>
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
