import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";
import taskProgressSlice from "./slices/taskProgress";
import taskInProgressSlice from "./slices/taskInProgress";
import topSwiperIndexSlice from "./slices/topSwiperIndex";

export const action = {
  tasks: tasksSlice.actions,
  taskInProgress: taskInProgressSlice.actions,
  taskProgress: taskProgressSlice.actions,
  topSwiperIndex: topSwiperIndexSlice.actions,
};

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
  taskInProgress: taskInProgressSlice.reducer,
  taskProgress: taskProgressSlice.reducer,
  topSwiperIndex: topSwiperIndexSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer: reducer,
});
