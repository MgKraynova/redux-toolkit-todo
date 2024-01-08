import "./App.css";
import { TodoList } from "./features/todo-list/todo-list";
import { useState } from "react";
import { UsersList } from "./features/users-list/users-list";
import { useAppDispatch, useAppSelector } from "./hooks";
import { todoAdded } from "./features/todo-list/todo-list-slice";

function App() {
  const [inputValue, setInputValue] = useState("");

  const todos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(
      todoAdded({
        userId: 1,
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: inputValue,
        body: inputValue,
      })
    );
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <TodoList />
      <input
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="Введи туду"
      />
      <button onClick={handleAddTodo}>Добавить туду</button>
      <UsersList />
    </>
  );
}

export default App;
