import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { TodoList } from "./features/todo-list/todo-list";
import { useState } from "react";
import { TODO_ACTION, TTodoState } from "./store/todos.reducer";
import { RootState } from "./main";
import { UsersList } from "./features/users-list/users-list";

function App() {
  const [inputValue, setInputValue] = useState("");

  const todos = useSelector((state: RootState) => state.todo).todos;

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch({
      type: TODO_ACTION.ADD_TODO,
      payload: {
        newTodo: {
          userId: 1,
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          title: inputValue,
          body: inputValue,
        },
      },
    });
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
