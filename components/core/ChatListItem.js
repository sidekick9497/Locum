import React from 'react';
import ProfilePic from './Avatar'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ChatListItem = ({ item, onClick }) => (
     <TouchableOpacity style={styles.card} onPress={onClick}>
              <ProfilePic  uri={item.image} online={item.online} size="large"/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastText}>{item.lastText}</Text>
              </View>
      </TouchableOpacity>
  );

const styles = StyleSheet.create({
  contentList: {
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image: {
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 2,
    marginRight: 2,
    marginTop:20,
    backgroundColor:"white",
    padding: 2,
    flexDirection:'row',
    borderRadius:5,
  },
  name: {
    fontSize:22,
    flex:1,
    // alignSelf:'left',
    color:"#778877",
    fontWeight:'bold'
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
  followButtonText: {
    color: "#dcdcdc",
    fontSize:12,
  },
  lastText: {
    fontSize:18,
    flex:1,
    // alignSelf:'left',
    color:"grey"
  }
 
}); 
                 
export default ChatListItem  