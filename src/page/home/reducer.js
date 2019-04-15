import {ARTICLE_LIST, ARTICLE_LIST_MORE, SCROLL_SHOW_CHANGE} from "./actionTypes";
import {fromJS} from "immutable";

const defaultState = fromJS({
  articleList: [],
  topicList: [],
  showScroll: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case ARTICLE_LIST:
      return state.merge({
        articleList: action.articleList,
        topicList: action.topicList
      });
    case ARTICLE_LIST_MORE:
      return state.set("articleList", state.get("articleList").concat(action.data));
    case SCROLL_SHOW_CHANGE:
      return state.set("showScroll", action.status);
    default:
      return state;
  }
}