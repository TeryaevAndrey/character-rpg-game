import { createSlice } from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
  isOpenModal: boolean;
  currentName: string;
}

const initialState: InitialState = {
  isOpenModal: false,
  currentName: "Имя"
};

export const NameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
    setCurrentName: (state, action: PayloadAction<string>) => {
      state.currentName = action.payload;
    }
  }
});

export const {setOpenModal, setCurrentName} = NameSlice.actions;