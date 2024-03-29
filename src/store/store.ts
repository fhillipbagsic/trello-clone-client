import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../store/board";
import membersReducer from "./members";
const store = configureStore({
  reducer: {
    boards: boardsReducer,
    members: membersReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
