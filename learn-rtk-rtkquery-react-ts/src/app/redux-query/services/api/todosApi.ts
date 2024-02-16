import baseApi from "./baseApi.ts";
import { Todo } from "./types.ts";

export const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => "todos",
    }),
    createNewTodo: builder.mutation<Todo, Todo>({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation<void, Todo>({
      query: (updateTodo) => ({
        url: `todos/${updateTodo.id}`,
        method: "PUT",
        body: {
          ...updateTodo,
          isDone: !updateTodo.isDone,
        },
      }),
    }),
  }),
});

const enhancedTodosApi = todosApi.enhanceEndpoints({
  addTagTypes: ["Todo"],
  endpoints: {
    getAllTodos: {
      providesTags: ["Todo"],
    },
    createNewTodo: {
      invalidatesTags: ["Todo"],
    },
    updateTodo: {
      invalidatesTags: ["Todo"],
    },
  },
});

export const {
  useGetAllTodosQuery,
  useCreateNewTodoMutation,
  useUpdateTodoMutation,
} = enhancedTodosApi;
