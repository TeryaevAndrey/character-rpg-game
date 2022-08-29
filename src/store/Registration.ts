import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  emailError: boolean;
  passwordError: boolean;
  validForm: boolean;
}

const initialState: InitialState = {
  emailError: false,
  passwordError: false,
  validForm: false,
};

export const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    checkEmailError: (state, action: PayloadAction<boolean>) => {
      state.emailError = action.payload;
    },
    checkPasswordError: (state, action: PayloadAction<boolean>) => {
      state.passwordError = action.payload;
    },
    checkValidForm: (state, action: PayloadAction<boolean>) => {
      state.validForm = action.payload;
    }
  },
});

export const { checkEmailError, checkPasswordError, checkValidForm } = RegistrationSlice.actions;
