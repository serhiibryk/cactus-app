import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { ICharacter } from "../../../types/common";
import type { ICharactersState } from "./types";

export const initialState: ICharactersState = {
  charactersList: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCurrentCharacter: (state, action: PayloadAction<ICharacter[]>) => {
      state.charactersList = action.payload;
    },
  },
});

export const { setCurrentCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
