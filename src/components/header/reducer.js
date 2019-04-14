import {
  PAGE_CHANGE,
  SEARCH_FOCUS,
  SEARCH_BLUR,
  SEARCH_TRENDING,
  SEARCH_MOUSE_ENTER,
  SEARCH_MOUSE_LEAVE,
} from "./actionTypes";
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set("focused", true);
    case SEARCH_BLUR:
      return state.set("focused", false);
    case SEARCH_TRENDING:
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case SEARCH_MOUSE_ENTER:
      return state.set("mouseIn", true);
    case SEARCH_MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case PAGE_CHANGE:
      return state.set("page", action.page);
    default:
      return state;
  }
}

