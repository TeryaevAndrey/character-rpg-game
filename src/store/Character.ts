import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  mainParameters: {
    power: number;
    dexterity: number;
    intelligence: number;
    charisma: number;
  };
  secondParameters: {
    lifeForce: number;
    evasion: number;
    energy: number;
  };
  skills: [];
}

const initialState: InitialState = {
  mainParameters: {
    power: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,
  },
  secondParameters: {
    lifeForce: 0,
    evasion: 0,
    energy: 0,
  },
  skills: [],
};

interface MainParameters {
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

interface SecondParameters {
  lifeForce: number;
  evasion: number;
  energy: number;
}

export const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setMainParameters: (state, action: PayloadAction<MainParameters>) => {
      state.mainParameters = action.payload;
    },
    setSecondParameters: (state, action: PayloadAction<SecondParameters>) => {
      state.secondParameters = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setMainParameters, setSecondParameters, setSkills } =
  CharacterSlice.actions;
