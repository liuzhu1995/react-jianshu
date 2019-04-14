import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  SEARCH_TRENDING,
  SEARCH_MOUSE_ENTER,
  SEARCH_MOUSE_LEAVE,
  PAGE_CHANGE
} from "./actionTypes";
import {fromJS} from "immutable";
import axios from "axios";

const getTrendingsSearch = (data) => ({
  type: SEARCH_TRENDING,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});


export const searchFocus = () => ({
  type: SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: SEARCH_MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: SEARCH_MOUSE_LEAVE
});
export const changePage = (pageNum) => ({
  type: PAGE_CHANGE,
  page: pageNum
});


export const searchFocusAsync = () =>  {
  return (dispatch) => {
    axios.get("api/headerList.json").then((res) => {
      const data = res.data;
      dispatch(getTrendingsSearch(data.data));
    }).catch((err) => {
      console.log(err, "err");
    })
  }
};