import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./features/todos/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [task, setTask] = useState("");

  function handleAddTodo() {
    if (task === "") {
      return;
    }

    dispatch(
      addTodo({
        id: Date.now(),
        title: task,
      }),
    );

    setTask("");
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      <h3>Todo App</h3>
      <hr />
      <input
        type="text"
        placeholder="Enter Todo"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      ></input>{" "}
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((item) => (
        <p key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleDelete(item.id)}>Delete</button>{" "}
        </p>
      ))}
    </>
  );
}

export default TodoList;
