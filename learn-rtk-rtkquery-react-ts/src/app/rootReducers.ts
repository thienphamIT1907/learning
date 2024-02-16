import { combineReducers } from "@reduxjs/toolkit";
import baseApi from "./redux-query/services/api/baseApi.ts";
import { usersApi } from "./redux-query/services/api/usersApi.ts";
import counterReducer from "./redux/features/counter/slices";

const rootReducers = combineReducers({
  counter: counterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export default rootReducers;
