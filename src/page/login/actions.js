import {CHANGE_LOGIN, LOGIN_OUT} from "./actionTypes";
import axios from "axios";

export const hasLogin = (data) => ({
  type: CHANGE_LOGIN,
  status: data
});
export const loginOut = (data) => ({
  type: LOGIN_OUT,
  status: data
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=$${password}`).then(res => {
      const data = res.data;
      dispatch(hasLogin(data))
    }).catch(err => {

    })
  }
};