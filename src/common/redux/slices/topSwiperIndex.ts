import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const topSwiperIndexSlice = createSlice({
  name: 'topSwiperIndex',
  initialState,
  reducers: {
    swipeTo: (_state, action: PayloadAction<number>) => action.payload,
  },
});

export default topSwiperIndexSlice;
