import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";
import taskProgressSlice from "./slices/taskProgress";
import taskInProgressSlice from "./slices/taskInProgress";

export const action = {
  tasks: tasksSlice.actions,
  taskProgress: taskProgressSlice.actions,
  taskInProgress: taskInProgressSlice.actions,
};

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
  taskProgress: taskProgressSlice.reducer,
  taskInProgress: taskInProgressSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer: reducer,
});
