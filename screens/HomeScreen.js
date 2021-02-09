import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home screen here</Text>
      <Button title="click here" onPress={()=>
        props.navigation.navigate("profile")}/>
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
