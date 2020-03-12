import { combineReducers } from "redux";
import gnomesReducer from "./gnomesReducer";
import genderReducer from "./genderReducer";
import searchReducer from "./searchReducer";
import professionsReducer from "./professionsReducer";
import orderByReducer from "./orderByReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  gnomes: gnomesReducer,
  gender: genderReducer,
  searchTerm: searchReducer,
  filterBy: professionsReducer,
  orderBy: orderByReducer,
  currentPage: paginationReducer
});
