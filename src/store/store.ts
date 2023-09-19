import { configureStore } from "@reduxjs/toolkit";
import authInfoReducer from "./authInfoSlice";

const store = configureStore({
  reducer: {
    authInfo: authInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
