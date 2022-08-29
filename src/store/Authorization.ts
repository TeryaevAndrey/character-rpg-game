import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  emailError: boolean;
  passwordError: boolean;
}

const initialState: InitialState = {
  emailError: false,
  passwordError: false,
};

export const AuthorizationSlice = createSlice({
  name: "authorization", 
  initialState,
  reducers: {
    checkEmailError: (state, action: PayloadAction<boolean>) => {
      state.emailError = action.payload;
    },
    checkPasswordError: (state, action: PayloadAction<boolean>) => {
      state.passwordError = action.payload;
    }
  }
});

export const {checkEmailError, checkPasswordError} = AuthorizationSlice.actions;