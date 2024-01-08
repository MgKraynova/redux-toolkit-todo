import { useAppDispatch, useAppSelector } from "../../hooks";
import { todoDeleted } from "./todo-list-slice";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch(todoDeleted(id));
  };

  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <li style={{ display: "flex" }} key={todo.id}>
            <p>
              {index + 1}. {todo.body}
            </p>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Удалить туду
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
