import { RootState } from "../../../store.ts";

export const counterSelector = (state: RootState) => state.counter.value;
