import {fromJS} from "immutable";

import {LOGIN} from "./actionTypes";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set("login", true);
    default:
      return state;
  }

}