import { findAllByDisplayValue } from "@testing-library/react";
import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";

const initState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  details: detailsReducer,
});
