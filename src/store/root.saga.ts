import { all } from "redux-saga/effects";
import { userSaga } from "./users.saga";

export function* rootSaga() {
  yield all([userSaga()]);
}
