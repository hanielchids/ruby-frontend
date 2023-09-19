import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthInfoState {
  isAuthenticated: boolean;
  userId: number | null;
  jwt: string | null;
}

const initialState: AuthInfoState = {
  isAuthenticated: false,
  userId: null,
  jwt: null,
};

const authInfoSlice = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    setAuthInfo: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        userId: number | null;
        jwt: string | null;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userId = action.payload.userId;
      state.jwt = action.payload.jwt;
    },
  },
});

export const { setAuthInfo } = authInfoSlice.actions;
export default authInfoSlice.reducer;
