import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Search from '../core/Search';
import {Appearance} from 'react-native-appearance'
import BaseListView from '../core/BaseListView'
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Search searchText = {props.searchText} searchTextEvent = {props.searchTextEvent} />
      <BaseListView/>
      <Text style={styles.center}>
        sys theme : {Appearance.getColorScheme()}
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
  }
});

export default HomeScreen;
