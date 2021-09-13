import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';
import TodoList from './components/TodoList';
import TapBar from './components/TapBar';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(0);
  const [type, setType] = useState("All");

  const submitToDo = () => {
    if (inputValue.match(/^\s*$/)) {
        return;
    }
    const todo = {
        title: inputValue,
        todoIndex,
        complete: false
    };
    setTodoIndex(prev => prev + 1);
    setTodos(prevState => [...prevState, todo]);
    setInputValue("");
  };

  const updateTodo = (index) => {
    let newTodoList = [...todos];
    newTodoList[index].complete = !newTodoList[index].complete
    setTodos(newTodoList);
  };

  const deleteTodo = (title) => {
    const newTodoList = todos.filter(todo => todo.title !== title);
    setTodos(newTodoList);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input inputValue={inputValue} setInputValue={setInputValue} submitToDo={submitToDo} />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} type={type} />
        <Button submitToDo={submitToDo} />
      </ScrollView>
      <TapBar type={type} setType={setType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
});
