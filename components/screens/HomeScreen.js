import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, View,Button, ScrollView } from 'react-native';
import Search from '../core/Search';
import {Appearance} from 'react-native-appearance'
import BaseListView from '../core/BaseListView'
import { Text } from 'react-native-elements';
import {BottomSheet} from '../core/BottomSheet';
import client from '../../apiAuth/guestClient';
const HomeScreen = (props) => {

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
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Search searchText = {props.searchText} searchTextEvent = {props.searchTextEvent} />
      <Text h1>Recent</Text>
      <BaseListView listItemPress={openBottomSheet}/>
       <Text h1>Suggestions</Text>
      <BaseListView/>
      </ScrollView>
       <BottomSheet
          isOpen={isVisible}
          openedPercentage={0.7}
          onClose={closeBottomSheet}>
          <View style={styles.buttonContainer}>
            <Button title="Close Bottom Sheet" onPress={closeBottomSheet} />
          </View>
        </BottomSheet>
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
