import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserInfo } from "@/types/user ";

const initialState: IUserInfo = {
  userInformation: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo")!)
    : null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<IUser>) {
      state.userInformation = action.payload;
    },
    userLogout(state) {
      state.userInformation = null;
    },
  },
});
export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
