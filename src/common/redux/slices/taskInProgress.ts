import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../task";

const taskInProgressSlice = createSlice({
  name: 'taskInProgress',
  initialState: null as Task | null,
  reducers: {
    set: (_state, action: PayloadAction<Task | null>) => action.payload,
    open: (_state, action: PayloadAction<Task>) => action.payload,
    close: () => null,
  },
});

export default taskInProgressSlice;
