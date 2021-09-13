import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Todo = ({ todo, updateTodo, deleteTodo, index }) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{todo.title}</Text>
      <View style={styles.buttons}>
      <BouncyCheckbox
        size={25}
        fillColor="green"
        unfillColor="#FFFFFF"
        text="Complete"
        iconStyle={{ borderColor: "green" }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        isChecked={todo.complete}
        onPress={() => updateTodo(index)}
      />
      <Text style={styles.delete} onPress={() => deleteTodo(todo.title)}>X</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  todoText: {
    fontSize: 17,
  },
  delete: {
      color: 'red',
      fontSize: 20,
      marginLeft: 20
  },
  buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
  }
});

export default Todo;
