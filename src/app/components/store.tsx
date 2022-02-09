import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CookiesSlice from "./reduxSlices/CookiesSlice";
import counterReducer from "./reduxSlices/counterSlice";
import LogInSlice from "./reduxSlices/FormSlice";

export const store = configureStore({
  reducer: {
    cookies: CookiesSlice,
    counter: counterReducer,
    login: LogInSlice,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
