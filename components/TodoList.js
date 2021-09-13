import React from "react";
import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <View>
      {todos.map((todo, i) => (
        <Todo key={todo.todoIndex} index={i} updateTodo={updateTodo} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
