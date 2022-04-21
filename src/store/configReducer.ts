import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./User/user.reducer";


const reducers = combineReducers({UserReducer})

export default reducers;