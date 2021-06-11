import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { Image, Card } from 'react-native-elements';
import { Icon } from 'react-native-eva-icons';
import * as FontAwesome from 'react-native-fontawesome/FontAwesomeIcons';
import ProfilePic from '../core/Avatar';

const openDialScreen = (number) => {
  if (Platform.OS === 'ios') {
    dail = `telprompt:${number}`;
  } else {
    dail = `tel:${number}`;
  }
  Linking.openURL(dail);
};

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Search bar???</Text>
      <DemoGraphics props={props} />
      <ETA online={props.profileDetails.online}/>
    </View>
  );
}

const DemoGraphics = ({ props }) => {
  return (
    <Card containerStyle={styles.demoGraphicsCardOuterStyle} wrapperStyle={styles.demoGraphicsCardInnerStyle}>
      <View style={styles.demoGraphicsContainer}>

        <View >
          <ProfilePic
            hideBadge={true}
            uri={props.profileDetails.profilePicUri}
            size="large"
          />
        </View>

        <View style={styles.column}>
          <View>
          <Text style={styles.title} >{props.profileDetails.profileName}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.column} >
              <Text style={styles.infoStyling}>
                <Icon style={styles.icons} name="pin-outline" fill="#ffffff" width={15} height={15} />
                {"  " + props.profileDetails.location}
              </Text>
              <Text style={styles.infoStyling} >
                <Icon style={styles.icons} name="briefcase-outline" fill="#ffffff" width={15} height={15} />
                {"  " + props.profileDetails.jobTitle}
              </Text>
            </View>

            <View style={styles.column} >
              <Text style={styles.infoStyling} onPress={() => openDialScreen(props.profileDetails.phoneNumber)}>
                <Icon style={styles.icons} name="phone-outline" fill="#ffffff" width={15} height={15} />
                {"  " + props.profileDetails.phoneNumber}
              </Text>
              <Text style={styles.infoStyling} onPress = {() => Linking.openURL(`mailto:${props.profileDetails.email}`)}>
                <Icon style={styles.icons} name="email-outline" fill="#ffffff" width={15} height={15} />
                {"  " + props.profileDetails.email}
              </Text>
            </View>
          </View>
        </View>

      </View>
    </Card>
  )
}

const ETA = ({online}) => {
  let status = '';
  online ? status = 'online' : 'offline';
  return(

    <View>
    <Text style={styles.eta} >{status}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  demoGraphicsCardOuterStyle: {
    backgroundColor: "#22B573",
    marginTop: 30,
    margin: 0
  },
  demoGraphicsCardInnerStyle: {
    backgroundColor: "#22B573",
    margin: 10
  },
  demoGraphicsContainer: {
    flexDirection: "row"
  },
  title: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },
  column: {
    position: "relative",
    top: 10,
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  infoStyling: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 15,
    marginLeft: 15,
    paddingBottom : 10
  },
  // mailOverFlow : {
  //   text
  // },
  icons: {
    position: "relative",
    top: 2
  },
  eta : {
    marginLeft : 20,
    fontSize : 20
  },
  lineHeight : {
    // lineHeight : 1
  }
});

export default ProfileScreen;
