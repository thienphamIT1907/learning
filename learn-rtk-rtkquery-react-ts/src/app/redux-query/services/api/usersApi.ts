import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import { UserResult } from "./types.ts";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const usersApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["users"],

  extractRehydrationInfo(action: any, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },

  endpoints: (builder) => ({
    getAllUsers: builder.query<UserResult, void>({
      providesTags: ["users"],
      invalidatesTags: undefined,
      query: () => ({
        url: "users",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useLazyGetAllUsersQuery } = usersApi;
