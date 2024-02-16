import { Middleware } from "@reduxjs/toolkit";
import baseApi from "./redux-query/services/api/baseApi.ts";
import { usersApi } from "./redux-query/services/api/usersApi.ts";

const rootMiddlewares: Middleware[] = [baseApi.middleware, usersApi.middleware];

export default rootMiddlewares;
