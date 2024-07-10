import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import commonReducer from "./slice/common";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    // [loginApi.reducerPath]: loginApi.reducer,   FOR USING RTK QUERY
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // .concat(loginApi.middleware)    // STORED THE chache DATA
  // .concat(rtkQueryErrorLogger),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
