import React from 'react';
import { StyleSheet, View, ScrollView, useColorScheme,TouchableHighlight } from 'react-native';
import {ListItem, Text,Button} from 'react-native-elements'
import ProfilePic from './Avatar'
import {useState} from 'react'
import {BottomSheet} from '../core/BottomSheet';
import { AntDesign } from '@expo/vector-icons';
const BottomUserView = (props) => {
	return(
		<BottomSheet
		isOpen={props.isOpen}
		openedPercentage={0.7}
		onClose={props.onClose}>
          {/* // add user details here */}
          <View>
	          <View >
						<Button
						containerStyle={styles.buttonContainer}
							onPress={props.onClose}
					  icon={
					    		<AntDesign name="closecircle" size={24} color="black"/>
					  }
					   closecircle
						  type="clear"

					/>

	          </View>
	          <UserInfoView item={props.item}/>
						</View>
          </BottomSheet>
	)
		  }

const UserInfoView = (props) => {
	return(
		<View style={{marginTop:18}}>
		<View style={{flexDirection:"row"}}>
		<View>
		<ProfilePic  uri={props.item.image} online={props.item.online} size="large"/>
		</View>
		<View style={{flex:2,marginLeft:20}}>
			<Text style={styles.name}>{props.item.name}</Text>
			<View style={{flexDirection:"row"}}>
			<Text style={styles.charges}> Rs. {props.item.charges} </Text>
			<Text style={styles.charges}>4.4</Text>
			</View>
		</View>
		</View>
		<View style={styles.cardContent}>
			<View style={styles.contentList}>
			<Text style={styles.awayText}>25 mins away</Text>
			</View>
		</View>
		</View>

		)
}

const styles = StyleSheet.create({
  contentList:{
		flex:1,
     flexDirection:'row'
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
	buttonContainer:{
    position: 'absolute',
		top:8,
    right: 8
},

  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },
  name:{
    fontSize:22,
    flex:1,
    // alignSelf:'left',
    color:"#778877",
    fontWeight:'bold',
  },
  charges: {
      fontSize:22,
    flex:1,
    // alignSelf:'left',
    color:"black",
    fontWeight:'bold',
  },
  tags:{
    fontSize:18,
    flex:1,
    // alignSelf:'center',
    color:"grey",
    fontWeight:'bold',
    marginLeft:10
  },
	awayText: {
		fontStyle:"italic"
	}
});
export default BottomUserView;
