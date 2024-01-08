import { TTodo } from "./../../types/todo.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum REDUX_TOOLKIT_SLICE_NAMES {
  TODOS = "TODOS",
}

export type TTodoState = {
  todos: TTodo[];
};

export const initialState: TTodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: REDUX_TOOLKIT_SLICE_NAMES.TODOS,
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<TTodo>) {
      state.todos.push(action.payload);
    },
    todoDeleted(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { todoAdded, todoDeleted } = todosSlice.actions;
export const { reducer: todosReducer } = todosSlice;
