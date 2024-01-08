import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user.type";
import { REDUX_TOOLKIT_SLICE_NAMES } from "../todo-list/todo-list-slice";
import { getUsers } from "../../api/get-users.api";

export type TUserState = {
  users: TUser[] | null;
  isLoading: boolean;
  isError: boolean;
};

export const initialState: TUserState = {
  users: null,
  isLoading: false,
  isError: false,
};

const usersSlice = createSlice({
  name: REDUX_TOOLKIT_SLICE_NAMES.USERS,
  initialState,
  reducers: {
    fetchUsersStarted(state) {
      state.isLoading = true;
    },
    fetchUsersSucceeded(state, action: PayloadAction<TUser[]>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    fetchUsersFailed(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed } =
  usersSlice.actions;
export const { reducer: usersReducer } = usersSlice;
