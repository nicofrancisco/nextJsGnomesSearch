import { REQUEST_GNOMES } from "./../actions/types";

function gnomesReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_GNOMES:
      return action.payload;
    default:
      return state;
  }

}
export default gnomesReducer;
