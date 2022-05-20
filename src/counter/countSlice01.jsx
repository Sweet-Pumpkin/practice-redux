import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    plus: state => {
      state.value += 1
    },
    minus: state => {
      state.value -= 1
    },
  },
})

export const { plus, minus } = counterSlice.actions; // redux02.jsx로 import할 action.
export default counterSlice.reducer; // slice는 slice.reducer로 내보낸다. store.js는 위 파일을 전부 reducer로 받는다.