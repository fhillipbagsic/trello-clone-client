import { createSlice } from "@reduxjs/toolkit";
import { Board } from "../util/boardInterface";

const initialStateValue: Board[] = [
  {
    board: {
      title: "Design",
      color: "red",
    },
    cards: [
      {
        image:
          "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        tags: ["red", "blue", "yellow", "green"],
        title:
          "Old fashioned recipe for preventing allergies and chemical sensitivities",
        description:
          "Successful businesses know the importance of building and maintaining good working",
        members: [
          {
            name: "Fhillip Bagsic",
            image:
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "fhillipbagsic@trello.com",
          },
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "annawells@trello.com",
          },
          {
            name: "John Max",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            email: "johnmax@trello.com",
          },
        ],
        comments: [
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            comment: "Amazing",
            date: 1635758304979,
          },
          {
            name: "John Max",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            comment: "Wow",
            date: 1635758308979,
          },
        ],
        likes: ["Anna Wells", "John Max"],
      },
      {
        tags: ["red"],
        title:
          "Old fashioned recipe for preventing allergies and chemical sensitivities",
        description: "",
        members: [
          {
            name: "Fhillip Bagsic",
            image:
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "fhillipbagsic@trello.com",
          },
        ],
      },
    ],
  },
  {
    board: {
      title: "Prototip",
      color: "yellow",
    },
    cards: [
      {
        tags: ["blue"],
        title: "Home business advertising ideas",
        description:
          "Successful businesses know the importance of building and maintaining good working.",
        members: [
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "annawells@trello.com",
          },
        ],
        comments: [],
        likes: [],
      },
      {
        image:
          "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        tags: ["blue"],
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description:
          "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        members: [
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "annawells@trello.com",
          },
        ],
      },
    ],
  },
  {
    board: {
      title: "Test",
      color: "blue",
    },
    cards: [
      {
        tags: ["red"],
        title: "Linux or windows which is it",
        description: "Saving money - is something we would all like",
        members: [
          {
            name: "John Max",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            email: "johnmax@trello.com",
          },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        tags: ["green", "red", "blue"],
        title: "Be single minded",
        description:
          "Create a list with all possible keywords that fit to your product, service or business field.",
        members: [
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
        ],
        likes: ["Fhillip Bagsic"],
      },
    ],
  },
  {
    board: {
      title: "Final",
      color: "purple",
    },
    cards: [
      {
        tags: ["yellow", "red"],
        title: "At home treatments for beauty on a budget",
        description:
          "The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.",
        members: [
          {
            name: "Fhillip Bagsic",
            image:
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "fhillipbagsic@trello.com",
          },
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "annawells@trello.com",
          },
          {
            name: "John Max",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            email: "johnmax@trello.com",
          },
        ],
        comments: [
          {
            name: "Anna Wellis",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            comment: "Thanks",
            date: 1635758304979,
          },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1561382936-53b1c2e537c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
        tags: ["red"],
        title: "Tips for choosing the perfect gloss",
        description:
          "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
        members: [
          {
            name: "Anna Wells",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            email: "annawells@trello.com",
          },
          {
            name: "John Max",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            email: "johnmax@trello.com",
          },
        ],
        comments: [
          {
            name: "John Max",
            comment: "Wow",
            image:
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            date: 1635758304979,
          },
        ],
        likes: ["John Max"],
      },
    ],
  },
];

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    value: initialStateValue,
    filteredValue: initialStateValue,
  },
  reducers: {
    setBoards: (state, action) => {
      state.value = action.payload;
    },
    setFilteredBoards: (state, action) => {
      state.filteredValue = action.payload;
    },
  },
});

export const { setBoards } = boardSlice.actions;
export default boardSlice.reducer;
