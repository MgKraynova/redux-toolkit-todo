import { useDispatch, useSelector } from "react-redux";
import { TODO_ACTION, TTodoState } from "../../store/todos.reducer";

export const TodoList = () => {
  const todos = useSelector((state: TTodoState) => state.todos);

  const dispatch = useDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: TODO_ACTION.DELETE_TODO,
      payload: {
        todoIdToDelete: id,
      },
    });
  };

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li style={{ display: "flex" }} key={todo.id}>
            <p>{todo.body}</p>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Удалить туду
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
