import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error("Fetching todos failed", err);
      }
    }

    fetchTodos();
  }, []);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={todos.length} />
    </div>
  );
}

// MERN Stack
// MongoDB Express React Node
// APIs
// Mongoose
