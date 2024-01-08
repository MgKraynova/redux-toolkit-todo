import { call, put, takeEvery } from "redux-saga/effects";
import { USERS_ACTION } from "./users.reducers";
import { getUsers } from "../api/get-users.api";

function* fetchUser() {
  try {
    const users: ReturnType<typeof getUsers> = yield call(getUsers);
    yield put({ type: USERS_ACTION.SET_GET_USERS_SUCCESS, payload: { users } });
  } catch (e) {
    yield put({ type: USERS_ACTION.SET_GET_USERS_ERROR });
  }
}

export function* userSaga() {
  yield takeEvery(USERS_ACTION.SET_GET_USERS_IS_LOADING, fetchUser);
}
