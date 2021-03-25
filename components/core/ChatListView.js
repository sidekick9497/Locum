import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ChatListItem from './ChatListItem';
const DATA =[
        {id:1,  name: "Comunity",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           lastText:"whatsUp", online:true},
        {id:2,  name: "Housing",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       lastText:"whatsUp", online:true},
        {id:3,  name: "Jobs",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", lastText:"whatsUp", online:false} ,
        {id:4,  name: "Personal",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    lastText:"whatsUp", online:false} ,
        {id:5,  name: "For sale",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        lastText:"whatsUp", online:true} ,
      ]; 


const chatOnClick = ()=> {
  console.log("chat item clicked");

}
const  ChatListView= () => {
  const renderItem = ({ item }) => (
    <ChatListItem item={item} onClick={chatOnClick} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default ChatListView;