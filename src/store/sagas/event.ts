import { fetch, fetchSaga } from "@store/slices/searchEvent";
import { takeLatest } from "redux-saga/effects";

export function* watchFetch() {
  yield takeLatest(fetch, fetchSaga);
}
