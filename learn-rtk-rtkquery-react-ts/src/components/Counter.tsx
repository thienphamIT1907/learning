import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../app/redux/features/counter/selectors.ts";
import { decrease, increase } from "../app/redux/features/counter/slices.ts";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="p-4 rounded bg-slate-50 shadow-xl">Your count: {count}</h1>
      <button
        className="py-2 px-4 rounded-md bg-green-950 text-white"
        onClick={handleIncrease}
      >
        Increase
      </button>
      <button
        className="py-2 px-4 rounded-md bg-pink-900 text-white"
        onClick={handleDecrease}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
