import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
// 2 custom components in the components folder
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // current state is courseGoals and setCourseGoals is the state setting function, it will update courseGoals
  const [courseGoals, setCourseGoals] = useState([]); // courseGoals initial value is an empty arry
  // isAddModal manages the modal, if it's false then don't show the modal
  const [isAddMode, setIsAddMode] = useState(false);

  // goalTitle is passed into this function
  const addGoalHandler = goalTitle => {
    // get the most current goals and update it with a new id and goal title
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]); // currentGoals is an array of objects, each object is an id and goal title
    setIsAddMode(false); // change isAddMode to false to close modal
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => { // if the id's don't match then keep that goal
      return currentGoals.filter(eachGoal => eachGoal.id !== goalId);
    }); // filter returns a new array, when the id's do match then drop that goal
  }; // the new array will update currentGoals

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false); // to close the modal
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput // use the GoalInput.js in components, passing these 3
        visible={isAddMode} // line 34 changes this to true in order to show the modal
        onAddGoal={addGoalHandler} // line 14, pass this function to GoalInput
        onCancel={cancelGoalAdditionHandler} // line 29, pass this function to GoalInput
      /> 
      <FlatList  // a scrollable list
      // looks at the item and it's index and use the id as the key
        keyExtractor={(item, index) => item.id} // unique key eliminates warning messages
        data={courseGoals} // data for this list comes from courseGoals
        // renderItem is called for every item in the array
        renderItem={itemData => (
          <GoalItem // use the GoalItem.js in components, passing these 3
            id={itemData.item.id}
            onDelete={removeGoalHandler} // line 23, pass this function to GoalItem
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
