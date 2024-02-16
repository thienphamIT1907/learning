import { createSlice } from "@reduxjs/toolkit";
import { generateCounterActions } from "./actions";
import { CounterInitialState } from "./types";

const initialState: CounterInitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: generateCounterActions,
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
