import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({visible, onAddGoal, onCancel}) => {
  console.log(visible)
  // current state is enteredGoal and setEnteredGoal is the state setting function
  const [enteredGoal, setEnteredGoal] = useState(''); // enteredGoal is empty to begin with

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText); // update enteredGoal with enteredText
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal); // line 38 of App.js
    setEnteredGoal(''); // reset text input
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}// line 9
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} /*line 39 of App.js*/ />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} /*line 13*/ /> 
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // take up the space of the entire screen
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%' // make the buttons the same size, buttons are wrapped in a View for this to work
  }
});

export default GoalInput;
