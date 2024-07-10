import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../base-query";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery,
  tagTypes: ["CommonType"],
  endpoints: (build) => ({
    //   getProperty: build.query({
    //     query: () => commonEndPoint.getPropertiesDropDown,
    //   }),
  }),
});

export const {} = commonApi;
