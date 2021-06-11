import React from 'react';
import {ListItem, Text} from 'react-native-elements'
import ProfilePic from './Avatar'
import {useState} from 'react'
import {BottomSheet} from '../core/BottomSheet';
const BottomUserView = (props) => {


	return(
		<BottomSheet
		isOpen={props.isVisible}
		openedPercentage={0.7}
		onClose={props.closeBottomSheet}>
          {/* // add user details here */}
          <View>
	          <View style={styles.buttonContainer}>
	          	<Button title="Close Bottom Sheet" onPress={props.closeBottomSheet} />
	          </View>
	          <View>
	           	<ProfilePic  uri={props.item.image} online={props.item.online} size="large"/>
	           	<Text style={styles.name}>{props.item.name}</Text>
	           	<Text style={styles.charges}> Rs. {props.item.charges} </Text>
	          </View>
          </View>

          </BottomSheet>
	)
		  }

      export default HomeBottomScreen;