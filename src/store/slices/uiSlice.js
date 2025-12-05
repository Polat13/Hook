import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  windowSize: {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setWindowSize: (state, action) => {
      state.windowSize = action.payload;
    },
  },
});

export const { setWindowSize } = uiSlice.actions;
export default uiSlice.reducer;
