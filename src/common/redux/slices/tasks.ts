import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../task";

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<Task[]>) => action.payload,
  },
});

export default tasksSlice;
