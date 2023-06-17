import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../task";
import uuid from "react-native-uuid";

const initialState: Task[] = [
  {
    id: 'task1',
    targetTime: 60,
    name: '基本情報の勉強',
    archived: false,
  },
  {
    id: uuid.v4() as string,
    targetTime: 10,
    name: '瞑想',
    archived: false,
  },
  {
    id: uuid.v4() as string,
    targetTime: 30,
    name: 'プログラミング',
    archived: true,
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<Task[]>) => action.payload,
  },
});

export default tasksSlice;
