import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todoList, setTodoList }) {
  return (
    <>
      {todoList.length != 0 && (
        <div className={styles.list}>
          {todoList.map((item) => (
            <TodoItem
              item={item}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      )}
    </>
  );
}
