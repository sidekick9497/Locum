import React from 'react';
import {View, Text} from 'react-native';

const ListItem = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default Item  