import { all, fork } from "redux-saga/effects";

import todoSaga from "./sagas";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}