import { createSlice, } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // action typeのprefix
  // 一意である必要があるため名前がぶつかることを防ぐ
  name: 'counter',
  // 初期値
  initialState: {
    value: 0,
  },
  // reducer
  // dispatchで送られてきたaction creatorをもとに下記に定義されているreducerが実行され、storeのstateを書き換える
  reducers: {
    increment: (state,) => {
      state.value += 1;
    },
    decrement: (state,) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action,) => {
      state.value += action.payload;
    },
  },
},);

// action creator
export const { increment, decrement, incrementByAmount, } = counterSlice.actions;

export default counterSlice.reducer;
