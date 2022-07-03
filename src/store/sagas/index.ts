import { all } from "redux-saga/effects";
import { watchFetch } from "./event";

export default function* sagas() {
  yield all([watchFetch()]);
}
