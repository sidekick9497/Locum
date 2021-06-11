import { Avatar, Badge } from 'react-native-elements';
import React from 'react';
import { View } from 'react-native'

const ProfilePic = (props) => {
	const status = props.online ? "success" : ""
	return (
		<View style={props.style}>
			<Avatar
				rounded
				source={{
					uri: props.uri
				}}
				size={props.size}
			/>
			{props.hideBadge !== true ?
				<Badge
					status={status}
					containerStyle={{ position: 'absolute', top: -4, right: -4}}
				/> : null
			}

		</View>
	)
}

export default ProfilePic;