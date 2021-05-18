import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ListItem from './ListItem';
const DATA =[
        {id:1,  name: "Comunity",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
        {id:2,  name: "Housing",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"},
        {id:3,  name: "Jobs",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
        {id:4,  name: "Personal",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
        {id:5,  name: "For sale",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678, tags:"driver, singer, teacher", online:true, charges:500, rating:"3"} ,
      ];


const  BaseListView= (props) => {

  
  const renderItem = ({ item }) => (
    <ListItem item={item} onPress={props.listItemPress} />
  );

  return(
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

export default BaseListView;