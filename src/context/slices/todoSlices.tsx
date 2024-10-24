import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    editTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        task: action.payload,
      });
    },

    // updateTask: (state, action) => {
    //   state.tasks = state.tasks.map((task) =>
    //     task.id === action.payload.id
    //       ? { ...task, task: action.payload.task }
    //       : task
    //   );
    //   state.editTask = null;
    // },

    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.task }
          : task
      );
      state.editTask = null;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setEditTask: (state, action) => {
      state.editTask = action.payload;
    },
    clearEditTask: (state) => {
      state.editTask = null;
    },
  },
});

export const { addTask, updateTask, deleteTask, setEditTask, clearEditTask } =
  todoSlice.actions;
export default todoSlice.reducer;
