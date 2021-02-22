import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// import BaseTabs from '../navigation/BaseStackNavigator';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <BaseTabs /> */}
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

export default HomeScreen;
