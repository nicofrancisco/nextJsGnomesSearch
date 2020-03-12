import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../src/reducers";

const initialState = {
  gnomes: [],
  gender: [],
  searchTerm: "",
  filterBy: "All",
  orderBy: "",
  currentPage: 0
};

export default function initializeStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
