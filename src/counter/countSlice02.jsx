import { createSlice } from '@reduxjs/toolkit'

export const counterSlice2 = createSlice({
  name: 'newCounter',
  initialState: {value: 0},
  reducers: {
    plus: state => {
      state.value += 5
    },
    minus: state => {
      state.value -= 5
    },
  },
})

export const { plus, minus } = counterSlice2.actions; // redux02.jsx로 import할 action.
export default counterSlice2.reducer; // slice는 slice.reducer로 내보낸다. store.js는 위 파일을 전부 reducer로 받는다.