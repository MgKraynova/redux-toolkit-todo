import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "../api/get-users.api";
import {
  fetchUsersFailed,
  fetchUsersStarted,
  fetchUsersSucceeded,
} from "../features/users-list/users-list-slice";
import { TUser } from "../types/user.type";

function* fetchUser() {
  try {
    const users: TUser[] = yield call(getUsers);

    yield put(fetchUsersSucceeded(users));
  } catch (e) {
    yield put(fetchUsersFailed());
  }
}

export function* userSaga() {
  yield takeEvery(fetchUsersStarted.type, fetchUser);
}
