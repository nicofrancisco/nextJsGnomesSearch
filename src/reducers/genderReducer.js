import { REQUEST_GENDER } from "./../actions/types";

function genderReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_GENDER:
      return action.payload;
    default:
      return state;
  }

}
export default genderReducer;
