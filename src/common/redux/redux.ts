import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";
import taskProgressSlice from "./slices/taskProgress";

export const action = {
  tasks: tasksSlice.actions,
  taskProgress: taskProgressSlice.actions,
};

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
  taskProgress: taskProgressSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer: reducer,
});
