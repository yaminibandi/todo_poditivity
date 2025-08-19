import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  async function handleDelete(id) {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  }
  async function handleClick(id) {
    try {
      const todo = todos.find((t) => t._id === id);
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: !todo.done }),
      });
      const updated = await res.json();
      setTodos(todos.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      console.error("Update failed", err);
    }
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleClick(item._id)} className={className}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item._id)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <div className={styles.line}></div>
    </div>
  );
}
