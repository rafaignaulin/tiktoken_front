import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@services/api";
import { SearchEvent } from "@type/schemas";
import { call, put } from "redux-saga/effects";
import { apiReducers } from "./util";

type initialState = {
  content: ApiCall<SearchEvent[], any>;
};

const initialState: initialState = {
  content: { phase: "NOT_ASKED" }
};

const searchEventSlice = createSlice({
  name: "searchEvent",
  initialState,
  reducers: apiReducers<string, SearchEvent[], string>({ initialState })
});

export function* fetchSaga(action: PayloadAction<string>) {
  yield put(searchEventSlice.actions.pending());

  try {
    const {
      data: [events, count]
    } = yield call(api.findAllEvents, {
      body: action.payload ? { title: action.payload } : {}
    });
    yield put(searchEventSlice.actions.success(events));
  } catch (e) {
    yield put(
      searchEventSlice.actions.error(
        e.response.data.message + ", " + e.response.statusText
      )
    );
  }
}

export const { fetch, pending, success, error } = searchEventSlice.actions;
export default searchEventSlice.reducer;
