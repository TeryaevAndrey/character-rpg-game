import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RegistrationSlice } from "./Registration";
import { AuthorizationSlice } from "./Authorization";
import { CharacterSlice } from "./Character";
import { NameSlice } from "./Name";
import { SaveBlockSlice } from "./SaveBlock";
import axios from "axios";

interface User {
  id: string;
  email: string;
  password: string;
}

interface Character {
  id: string;
  currentUser: string;
  mainParameters: [];
  secondParameters: [];
  skills: [];
  currentName: string;
}

interface InitialState {
  dataUsers: User[];
  dataCharacters: Character[];
  currentUser: string | null;
}

const initialState: InitialState = {
  dataUsers: [],
  dataCharacters: [],
  currentUser: "" || localStorage.getItem("id"),
};

export const getDataUsers = createAsyncThunk(
  "dataUsers/getDataUsers",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3001/users");
    dispatch(setDataUsers(res.data));
  }
);

export const getDataCharacters = createAsyncThunk(
  "dataCharacters/getDataCharacters",
  async(_, {dispatch}) => {
    const res = await axios.get("http://localhost:3001/characters");
    dispatch(setDataCharacters(res.data));
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
    setDataCharacters: (state, action: PayloadAction<Character[]>) => {
      state.dataCharacters = action.payload;
    }
  },
});

export const store = configureStore({
  reducer: {
    registration: RegistrationSlice.reducer,
    authorization: AuthorizationSlice.reducer,
    main: MainDataSlice.reducer,
    character: CharacterSlice.reducer,
    name: NameSlice.reducer,
    saveBlock: SaveBlockSlice.reducer,
  },
});

export const { setDataUsers, setCurrentUser, setDataCharacters } = MainDataSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
