import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasks";

export const action = {
  tasks: tasksSlice.actions,
};

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer: reducer,
});
