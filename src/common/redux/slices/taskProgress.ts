import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskDate, TaskProgress } from "../../task";

const initialState: TaskProgress[] = [
  {
    taskId: 'task1',
    date: TaskDate.getToday(),
    targetTime: 60,
    time: 10,
  },
  {
    taskId: 'task1',
    date: TaskDate.getToday(),
    targetTime: 60,
    time: 60,
  },
  {
    taskId: 'task2',
    date: TaskDate.getToday(),
    targetTime: 100,
    time: 30,
  },
];

const taskProgressMapSlice = createSlice({
  name: 'taskProgressMap',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<TaskProgress[]>) => action.payload,
    add: (state, action: PayloadAction<TaskProgress>) => {
      const newState = state.concat();
      newState.push(action.payload);
      return newState;
    },
  },
});

export default taskProgressMapSlice;
