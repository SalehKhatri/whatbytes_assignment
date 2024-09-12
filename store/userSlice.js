import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rank: 1,
  percentile: 30, 
  correctAnswers: { correct: 15, total: 30 }, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      const { rank, percentile, correctAnswers } = action.payload;
      state.rank = rank !== undefined ? rank : state.rank;
      state.percentile = percentile !== undefined ? percentile : state.percentile;
      state.correctAnswers.correct = correctAnswers !== undefined ? correctAnswers : state.correctAnswers.correct;
    },
  },
});

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
