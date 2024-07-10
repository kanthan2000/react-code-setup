import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
  // baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    //   const token = getCookie("accessToken");

    // If we have a token set in state, let's assume that we should be passing it.

    return headers;
  },
});
