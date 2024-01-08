import { useDispatch, useSelector } from "react-redux";
import { TODO_ACTION } from "../../store/todos.reducer";
import { RootState } from "../../main";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

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
        {todos.map((todo, index) => (
          <li style={{ display: "flex" }} key={todo.id}>
            <p>{index + 1}. {todo.body}</p>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Удалить туду
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
