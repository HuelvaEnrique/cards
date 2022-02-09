import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";

const projectName = "prueba";

const coockiesNames = {
  darkMode: `${projectName}Mode`,
  token: `${projectName}Token`,
  currentUser: `${projectName}User`,
};

export interface CookieState {
  darkMode: boolean;
  token: any | undefined;
  currentUser: any | undefined;
}

function createDarkModeCookie(): boolean {
  Cookies.set(coockiesNames.darkMode, `${false}`, { sameSite: "strict" });
  return false;
}

function initCookies(type: string): any {
  switch (type) {
    case coockiesNames.darkMode:
      return Cookies.get(coockiesNames.darkMode)
        ? Cookies.get(coockiesNames.darkMode)?.toString() === "true"
          ? true
          : false
        : createDarkModeCookie();
    case coockiesNames.token:
      return Cookies.get(coockiesNames.token)
        ? JSON.parse(Cookies.get(coockiesNames.token) || "{'no':'vacio'}")
        : undefined;
    default:
      break;
  }
}

const initialState: CookieState = {
  darkMode: initCookies(coockiesNames.darkMode),
  token: initCookies(coockiesNames.token),
  currentUser: undefined,
};

export const CookiesSlice = createSlice({
  name: "Cookies",
  initialState,

  reducers: {
    handleMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      Cookies.set(coockiesNames.darkMode, `${action.payload}`, {
        sameSite: "strict",
      });
    },
    handleCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
    },
    handleEraseCookies: () => {
      Cookies.remove(coockiesNames.token);
      Cookies.remove(coockiesNames.darkMode);
    },
  },
});
export const selectMode = (state: RootState) => state.cookies.darkMode;
export const selectToken = (state: RootState) => state.cookies.currentUser;
export const selectUser = (state: RootState) => state.cookies.token;
export const { handleMode, handleCurrentUser, handleEraseCookies } =
  CookiesSlice.actions;

export default CookiesSlice.reducer;
