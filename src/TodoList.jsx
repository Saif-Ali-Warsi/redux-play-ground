import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./features/todos/todoSlice";
import { fetchTodos } from "./features/todos/todoThunks";

function TodoList() {
  const dispatch = useDispatch();
  const {todos, loding, error} = useSelector((state) => state.todos);

  const [task, setTask] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  function handleAddTodo() {
    if (task === "") {
      return;
    }

    dispatch(
      addTodo({
        id: Date.now(),
        todo: task,
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
          {item.todo}{" "}
          <button onClick={() => handleDelete(item.id)}>Delete</button>{" "}
        </p>
      ))}
    </>
  );
}

export default TodoList;
