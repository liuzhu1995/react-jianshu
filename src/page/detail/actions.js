import {CHANGE_DETAIL} from "./actionTypes";
import {fromJS} from "immutable";
import axios from "axios";

const changeDetailData = (data) => ({
  type: CHANGE_DETAIL,
  title: fromJS(data.title),
  content: (data.content)
});

//获取详情数据
export const getDetailDataAsync = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then(res=> {
      const data = res.data;
      dispatch(changeDetailData(data.data));
    }).catch(err => {
      console.log(err);
    })
  }
};