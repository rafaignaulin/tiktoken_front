import { createSlice } from "@reduxjs/toolkit";

const initialState: { name?: string } = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    test: (state, action) => {
      return state;
    }
  }
});

export default userSlice.reducer;
