import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../task";

const taskInProgressSlice = createSlice({
  name: 'taskInProgress',
  initialState: null as Task | null,
  reducers: {
    open: (_state, action: PayloadAction<Task>) => action.payload,
    close: () => null,
  },
});

export default taskInProgressSlice;
