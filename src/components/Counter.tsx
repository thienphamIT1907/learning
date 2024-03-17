import { useCounterStore } from "../zustand/counterStore";

type CounterProps = {
  count: number;
};

const Counter = ({ count }: CounterProps) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div>Counter value is: {count}</div>
      <section className="space-x-6">
        <button
          onClick={increment}
          className="px-4 py-2 bg-slate-500 text-white rounded-md"
        >
          Increment
        </button>
        <button
          onClick={incrementAsync}
          className="px-4 py-2 bg-slate-500 text-white rounded-md"
        >
          Increment Async
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-slate-500 text-white rounded-md"
        >
          Decrement
        </button>
      </section>
    </div>
  );
};

export default Counter;
