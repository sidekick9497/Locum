import React from 'react';
import ProfilePic from './Avatar'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Badge} from 'react-native-elements'

const ListItem = ({ item }) => (
     <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <ProfilePic  uri={item.image} online={item.online} size="large"/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.tags}>{item.tags}</Text>
                <Text>{item.charges}</Text>
                <Badge value={item.rating} status={getStatus(item.rating)} 
                                textStyle={{ color: 'white', fontSize: 20, lineHeight: 30 }}
                                 badgeStyle={{ width:50, height:35}}/>
              </View>
            </TouchableOpacity>
  );

const getStatus = (rating)=>{
	if(rating>4){
		return "success"
	}
	else if(rating>2) {
		return "warning"
	}
	return "error"
}
const styles = StyleSheet.create({
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:22,
    flex:1,
    // alignSelf:'left',
    color:"#778877",
    fontWeight:'bold',
    marginLeft:10
  },
  tags:{
    fontSize:18,
    flex:1,
    // alignSelf:'center',
    color:"grey",
    fontWeight:'bold',
    marginLeft:10
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
}); 
                 
export default ListItem  