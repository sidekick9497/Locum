import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

const ContactScreen = () => {
  
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

export default ContactScreen;
