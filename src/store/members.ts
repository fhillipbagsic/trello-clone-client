import { createSlice } from "@reduxjs/toolkit";
import { Members } from "../util/memberInterface";

const initialStateValue: Members = [
  {
    name: "Anna Wells",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    email: "annawells@trello.com",
  },
  {
    name: "Fhillip Bagsic",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    email: "fhillipbagsic@trello.com",
  },
  {
    name: "John Max",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    email: "johnmax@trello.com",
  },
];

const membersSlice = createSlice({
  name: "members",
  initialState: { value: initialStateValue },
  reducers: {
    setMembers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMembers } = membersSlice.actions;
export default membersSlice.reducer;
