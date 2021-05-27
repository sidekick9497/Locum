import React from 'react';
import {ListItem, Text} from 'react-native-elements'
import {useState} from 'react'
import {BottomSheet} from '../core/BottomSheet';
const BottomUserView = (props) => {


return(
  	 <BottomSheet
          isOpen={props.isVisible}
          openedPercentage={0.7}
          onClose={props.closeBottomSheet}>
          {// add user details here}
          <View style={styles.buttonContainer}>
            <Button title="Close Bottom Sheet" onPress={props.closeBottomSheet} />
          </View>
        </BottomSheet>
}

export default HomeBottomScreen;