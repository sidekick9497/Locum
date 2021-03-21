import { Avatar, Badge } from 'react-native-elements';
import React from 'react';
import {View} from 'react-native'

const ProfilePic = (props)=> {
	const status = props.online?"success":""
	return (
		<View>
			<Avatar
			rounded
			source={
				props.uri
			}
			size="large"
			/>

			<Badge
			status={status}
			containerStyle={{ position: 'absolute', top: -4, right: -4 }}
			/>
		</View>
	)
}

export default ProfilePic