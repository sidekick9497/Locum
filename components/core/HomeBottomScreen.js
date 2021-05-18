import React from 'react';
import {ListItem, BottomSheet,Text} from 'react-native-elements'
import {useState} from 'react'

const HomeBottomScreen = (props) => {


return(
  	<BottomSheet
	  modalProps={{visible: false}}
	  containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
		>
	  <Text h1>Suggestions</Text>
	</BottomSheet>);
}

export default HomeBottomScreen;