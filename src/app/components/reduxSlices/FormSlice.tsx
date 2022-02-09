import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FormState {
  email: string;
  password: string;
  enabled: boolean;
}

const initialState: FormState = {
  email: "",
  password: "",
  enabled: false,
};

export const LogInSlice = createSlice({
  name: "Formlogin",
  initialState,

  reducers: {
    HandleEmail: (state, action: PayloadAction<string>) => {
      state.email += action.payload;
    },
    HandlePassword: (state, action: PayloadAction<string>) => {
      state.password += action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    HandleEnabled: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
  },
});
export const selectEmail = (state: RootState) => state.login.email;
export const selectPass = (state: RootState) => state.login.password;
export const selectEnabled = (state: RootState) => state.login.enabled;
export const { HandleEmail, HandleEnabled, HandlePassword } =
  LogInSlice.actions;

export default LogInSlice.reducer;
