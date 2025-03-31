import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "../pages/charactersList/store/slices";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
