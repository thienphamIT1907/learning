import { useState } from "react";
import {
  useCreateNewTodoMutation,
  useGetAllTodosQuery,
  useUpdateTodoMutation,
} from "../app/redux-query/services/api/todosApi.ts";

const Todo = () => {
  const [input, setInput] = useState("");
  const { data } = useGetAllTodosQuery();
  const [createNewTodo] = useCreateNewTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1>TODO list</h1>
        <ul className="bg-teal-100 p-4 mt-10">
          {data &&
            data?.length > 0 &&
            data?.map((todo) => (
              <li
                key={todo.id}
                onClick={async () => {
                  await updateTodo(todo);
                }}
              >
                {todo.id} / {todo.title} - [{JSON.stringify(todo.isDone)}]
              </li>
            ))}
        </ul>
      </div>
      <div>
        <input
          className="border p-4 mt-6"
          type="text"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
        />
      </div>
      <button
        className="text-white bg-slate-600 rounded py-2 px-4 m-5"
        onClick={async () => {
          await createNewTodo({
            id: Math.floor(Math.random() * 100000).toString(),
            title: input,
            isDone: false,
          });
          setInput("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Todo;
