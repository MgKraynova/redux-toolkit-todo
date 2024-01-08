import { TUser } from "../types/user.type";

export type TUserState = {
  users: TUser[] | null;
  isLoading: boolean;
  isError: boolean;
  isLoaded: boolean;
};

export enum USERS_ACTION {
  SET_GET_USERS_IS_LOADING = "SET_GET_USERS_IS_LOADING",
  SET_GET_USERS_SUCCESS = "SET_GET_USERS_SUCCESS",
  SET_GET_USERS_ERROR = "SET_GET_USERS_ERROR",
}

export type TGetUsersAction = {
  type: USERS_ACTION.SET_GET_USERS_IS_LOADING;
};

export type TGetUsersSuccessAction = {
  type: USERS_ACTION.SET_GET_USERS_SUCCESS;
  payload: {
    users: TUser[];
  };
};

export type TGetUsersErrorAction = {
  type: USERS_ACTION.SET_GET_USERS_ERROR;
};

export type TUsersAction =
  | TGetUsersAction
  | TGetUsersSuccessAction
  | TGetUsersErrorAction;

export const initialState: TUserState = {
  users: null,
  isLoading: false,
  isError: false,
  isLoaded: false,
};

export function usersReducer(state = initialState, action: TUsersAction) {
  switch (action.type) {
    case USERS_ACTION.SET_GET_USERS_IS_LOADING: {
      return { ...initialState, isLoading: true };
    }
    case USERS_ACTION.SET_GET_USERS_SUCCESS: {
      return { ...state, isLoading: false, users: action.payload.users };
    }
    case USERS_ACTION.SET_GET_USERS_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
}
