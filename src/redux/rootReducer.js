import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice"

const rootReducer =  combineReducers({
    todo: todoReducer,
});

export default rootReducer;