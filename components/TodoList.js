import React from "react";
import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodo, deleteTodo, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case "All":
        return todos;
      case "Complete":
        return todos.filter(todo => todo.complete);
      case "Active":
        return todos.filter(todo => !todo.complete);
    }
  };
  return (
    <View>
      {getVisibleTodos(todos, type).map((todo, i) => (
        <Todo key={i} index={i} updateTodo={updateTodo} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
