import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/types/types-external";

export const apiReducers = <F, D, E>({ initialState }) => {
  return {
    fetch: (
      state: WritableDraft<typeof initialState>,
      action: PayloadAction<F>
    ): typeof initialState => ({
      content: { phase: "PENDING" }
    }),
    pending: (
      state: WritableDraft<typeof initialState>,
      action: PayloadAction
    ): typeof initialState => ({
      content: { phase: "PENDING" }
    }),
    success: (
      state: WritableDraft<typeof initialState>,
      action: PayloadAction<D>
    ): typeof initialState => ({
      content: { phase: "SUCCESS", data: action.payload }
    }),
    error: (
      state: WritableDraft<typeof initialState>,
      action: PayloadAction<E>
    ): typeof initialState => ({
      content: { phase: "ERROR", error: action.payload }
    })
  };
};
