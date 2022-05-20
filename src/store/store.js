import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter/countSlice01";
import counterSlice2 from "../counter/countSlice02";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    newCounter: counterSlice2
  }
})