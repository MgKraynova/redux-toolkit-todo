import { TTodo } from "../types/todo.type";

export type TTodoState = {
  todos: TTodo[];
};

export enum TODO_ACTION {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type TAddTodoAction = {
  type: TODO_ACTION.ADD_TODO;
  payload: {
    newTodo: TTodo;
  };
};

export type TDeleteTodoAction = {
  type: TODO_ACTION.DELETE_TODO;
  payload: {
    todoIdToDelete: number;
  };
};

export type TAction = TAddTodoAction | TDeleteTodoAction;

export const initialState: TTodoState = {
  todos: [],
};

export function todosReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case TODO_ACTION.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload.newTodo] };
    }
    case TODO_ACTION.DELETE_TODO:
      const updatedTodos = [...state.todos].filter(
        (item) => item.id !== action.payload.todoIdToDelete
      );

      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
}
