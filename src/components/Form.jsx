import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name != "") {
      setTodoList([...todoList, todo]);
      setTodo({ name: "", done: false });
    }
  }
  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          name="todo1"
          className={styles.todoinput}
          placeholder="Enter Todo Item ..."
        />

        <button
          className={styles.addButton}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
