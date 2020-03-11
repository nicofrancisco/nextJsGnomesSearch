import { FILTER_BY_JOB } from "./../actions/types";

function professionsReducer(state = "", action) {
  switch (action.type) {
    case FILTER_BY_JOB:
      return action.payload;
    default:
      return state;
  }
}
export default professionsReducer;
