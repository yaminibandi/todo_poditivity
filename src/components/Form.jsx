import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: todo.name }),
      });
      const newTodo = await res.json();
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    } catch (err) {
      console.error("Add todo failed");
    }
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputfield}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
