import { combineReducers } from "redux";
import cards from "./cards";

// Combine reducers
const flashcardApp = combineReducers({
  cards
});

export default flashcardApp;
