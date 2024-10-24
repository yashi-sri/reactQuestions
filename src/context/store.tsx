import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../context/slices/todoSlices";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
