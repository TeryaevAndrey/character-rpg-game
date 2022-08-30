import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isSaveBlock: boolean;
}

const initialState: InitialState = {
  isSaveBlock: false,
};

export const SaveBlockSlice = createSlice({
  name: "saveBlock",
  initialState,
  reducers: {
    setOpenSaveBlock: (state, action: PayloadAction<boolean>) => {
      state.isSaveBlock = action.payload;
    }
  }
});

export const {setOpenSaveBlock} = SaveBlockSlice.actions;