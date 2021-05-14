import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Button, ScrollView } from 'react-native';
import Search from '../core/Search';
import {Appearance} from 'react-native-appearance'
import BaseListView from '../core/BaseListView'
import { Text } from 'react-native-elements';
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Search searchText = {props.searchText} searchTextEvent = {props.searchTextEvent} />
      <Text h1>Recent</Text>
      <BaseListView/>
       <Text h1>Suggestions</Text>
      <BaseListView/>
      </ScrollView>
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
