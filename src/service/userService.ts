import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { url } from "inspector";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typecode.com",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});
