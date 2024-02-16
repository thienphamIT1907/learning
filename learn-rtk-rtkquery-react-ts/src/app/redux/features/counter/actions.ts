import { ReducerCreators } from "@reduxjs/toolkit";
import { CounterInitialState } from "./types";

export const generateCounterActions = (
  creator: ReducerCreators<CounterInitialState>
) => ({
  increase: creator.reducer((state) => {
    state.value += 1;
  }),

  decrease: creator.reducer((state) => {
    state.value -= 1;
  }),
});
