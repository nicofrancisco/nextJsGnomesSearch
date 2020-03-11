import { ORDER_BY_FILTER } from "./../actions/types";

function orderByReducer(state = "", action) {
  switch (action.type) {
    case ORDER_BY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
export default orderByReducer;
