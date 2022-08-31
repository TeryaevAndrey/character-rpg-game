import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Skill {
  name: string;
  value: number;
  level: number;
}

interface InitialState {
  mainParameters: {
    power: number,
    dexterity: number,
    intelligence: number,
    charisma: number,
  };
  secondParameters: {
    lifeForce: number,
    evasion: number,
    energy: number,
  };
  skills: Skill[];
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
  skills: [
    {
      name: "attack",
      value: 0,
      level: 0,
    },
    {
      name: "stealth",
      value: 0,
      level: 0,
    },
    {
      name: "shooting",
      value: 0,
      level: 0,
    },
    {
      name: "learnability",
      value: 0,
      level: 0,
    },
    {
      name: "survival",
      value: 0,
      level: 0,
    },
    {
      name: "medicine",
      value: 0,
      level: 0,
    },
    {
      name: "intimidation",
      value: 0,
      level: 0,
    },
    {
      name: "insight",
      value: 0,
      level: 0,
    },
    {
      name: "appearance",
      value: 0,
      level: 0,
    },
    {
      name: "manipulation",
      value: 0,
      level: 0,
    },
  ],
};

export const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setMainParameters: (state, action) => {
     state.mainParameters = action.payload;
    },
    setSecondParameters: (state, action) => {
      state.secondParameters = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setMainParameters, setSecondParameters, setSkills } =
  CharacterSlice.actions;
