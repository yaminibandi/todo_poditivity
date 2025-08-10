import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const completedTodos = todoList.filter((todo) => todo.done).length;
  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer completedTodos={completedTodos} totalTodos={todoList.length} />
    </>
  );
}
