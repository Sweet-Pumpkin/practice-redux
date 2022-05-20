import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../counter/countSlice01";
import countSlice2 from "../counter/countSlice02";

export const store = configureStore({
  reducer: {
    counter: countSlice,
    newCounter: countSlice2,
  }
})