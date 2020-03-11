import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//receive 3 arguments
const GoalItem = ({id,onDelete,title}) => {
  console.log({id,onDelete,title});
  return (
    // works like an invisible button// bind will invoke or create the function and pass id
    <TouchableOpacity onPress={onDelete.bind(this, id)} >
      <View style={styles.listItem}> 
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
