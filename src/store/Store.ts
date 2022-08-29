import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RegistrationSlice } from "./Registration";
import { AuthorizationSlice } from "./Authorization";
import axios from "axios";

interface User {
  id: string;
  email: string;
  password: string;
}

interface InitialState {
  dataUsers: User[];
  currentUser: string;
}

const initialState: InitialState = {
  dataUsers: [],
  currentUser: "",
};

export const getDataUsers = createAsyncThunk(
  "dataUsers/getDataUsers",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3001/users");
    dispatch(setDataUsers(res.data));
  }
);

const MainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setDataUsers: (state, action: PayloadAction<User[]>) => {
      state.dataUsers = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    registration: RegistrationSlice.reducer,
    authorization: AuthorizationSlice.reducer,
    main: MainDataSlice.reducer,
  },
});

export const { setDataUsers, setCurrentUser } = MainDataSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
