import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'TR',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === 'TR' ? 'EN' : 'TR';
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
