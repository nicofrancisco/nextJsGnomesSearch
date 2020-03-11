import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./../reducers/reducers";

const initialValues = {
  gnomes: [],
  gender: [],
  searchTerm: "",
  filterBy: "All",
  orderBy: "",
  currentPage: 0
};

const configure = (initialState = initialValues) => {
  const composeEnhancers = compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configure;
