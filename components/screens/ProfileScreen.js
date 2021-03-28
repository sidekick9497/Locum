import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import ProfilePic from '../core/Avatar';

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <BlurBackground profilePic={props.profileDetails.profilePicUri} />
      <ProfilePic style={styles.profilePic}
        rounded
        uri={props.profileDetails.profilePicUri}
        size="xlarge"
      />
      <ProfileName name={props.profileDetails.profileName} />
      <Tags tags = {props.profileDetails.tags}/>
      <StatsHeaders  />
      <Stats stats = {props.profileDetails.stats} />
    </View>
  );
}

const BlurBackground = (props) => {
  return (
    <View>
      <Image style={styles.BlurBackground} source={{ uri: props.profilePic }} blurRadius={4} />
    </View>
  )
}

const ProfileName = (props) => {
  return (
    <Text style={styles.ProfileName} >
      {props.name}
    </Text>
  );
}

const Tags = (props) => {
  let TagText = '';
  props.tags.forEach( (element , index) => {
    if (index !== props.tags.length-1) {
      TagText = `${TagText}${element} || `
    }
    else{
      TagText = `${TagText}${element}`
    }
  });
  return (
    <Text style={styles.tags}>
      {TagText}
    </Text>
  )
}

const StatsHeaders = () => {
  return (
      <Text style={styles.statsHeaders}>
        Hired   Worked   Active days
      </Text>
  )
}

const Stats = (props) => {
  return (
    <Text style={styles.stats}>
      &nbsp; {props.stats.hired}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.stats.worked}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.stats.activeDays}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profilePic: {
    position: 'absolute',
    top: 100,
    // left : -15
  },
  BlurBackground: {
    // position : 'relative',
    width: 'auto',
    height: 150,
    // backgroundColor : 'yellow'
  },
  ProfileName: {
    position: 'absolute',
    top: 160,
    left: 160,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 23
    // font-family: 'Roboto', sans-serif;
  },
  tags : {
    position : 'absolute',
    top : 195,
    color : 'grey',
    fontSize : 17,
    left : 160
  },
  statsHeaders : {
    position : 'absolute',
    top : 270,
    color : '#888',
    fontSize : 20,
    fontWeight : 'bold',
    left : 160
  },
  stats : {
    position : 'absolute',
    top : 300,
    fontSize : 27,
    left : 160
  }
});

export default ProfileScreen;
