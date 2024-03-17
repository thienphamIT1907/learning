import Counter from "./components/Counter";
import UserList from "./components/UserList";
import { useCounterStore } from "./zustand/counterStore";

function App() {
  const count = useCounterStore((state) => state.count); // select specific state from store
  const { count: otherCount } = useCounterStore.getState(); // get entire object then we access specific parts
  console.log(otherCount === count); // same
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center h-screen w-full">
      <Counter count={count} />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
