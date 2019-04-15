import {ARTICLE_LIST, ARTICLE_LIST_MORE, SCROLL_SHOW_CHANGE} from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

const homeData = (data) => ({
  type: ARTICLE_LIST,
  articleList: fromJS(data.articleList),
  topicList: fromJS(data.topicList)
});

export const getArticleListAsync = () => {
 return (dispatch) => {
   axios.get("api/home.json").then((res) => {
     const data = res.data;
     dispatch(homeData(data.data));
   }).catch((err) => {
     console.log(err);
   })
 }
};

const HomeListData = (data) => ({
  type: ARTICLE_LIST_MORE,
  data: fromJS(data)
});
export const getMoreArticleList = () => {
  return (dispatch) => {
    axios.get("api/homeList.json").then((res) => {
      const data = res.data;
      dispatch(HomeListData(data.data))
    }).catch((err) => {
      console.log(err);
    })
  }
};

export const handleShowScroll = (flag) => ({
  type: SCROLL_SHOW_CHANGE,
  status: flag
});