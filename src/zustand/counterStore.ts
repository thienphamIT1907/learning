import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => Promise<void>;
};

type CounterStore = State & Action;

export const useCounterStore = create<CounterStore>((set) => ({
  count: 10,
  increment: () => set((state) => ({ count: state.count + 1 })), // syntax 1
  decrement: () => {
    set((state) => ({ count: state.count - 1 })); // syntax 2
  },
  incrementAsync: async () => {
    const result = await new Promise<number>((resolve) =>
      setTimeout(() => {
        resolve(10);
      }, 2000)
    );
    set((state) => ({ count: state.count + result }));
    console.log(result);
  },
}));
