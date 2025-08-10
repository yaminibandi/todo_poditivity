import styles from "./todoitem.module.css";
export default function TodoItem({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    console.log("delete clicked", item);
    setTodoList(todoList.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newTodoList = todoList.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
