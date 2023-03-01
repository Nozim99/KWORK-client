import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const configSlice = createSlice({
  name: "config",
  initialState: {
    signup: false,
    signin: false
  },
  reducers: {
    setSignup: (state, { payload }: { payload: boolean }) => {
      state.signup = payload
    },
    setSignin: (state, { payload }: { payload: boolean }) => {
      state.signin = payload
    }
  }
})

export const { setSignup, setSignin } = configSlice.actions
export default configSlice.reducer