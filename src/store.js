import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../src/reducers";

const initialValues = {
  gnomes: [],
  gender: [],
  searchTerm: "",
  filterBy: "All",
  orderBy: "",
  currentPage: 0
};

export default function initializeStore(initialValues) {
  console.log("rootReducer")
  console.log(rootReducer)
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
