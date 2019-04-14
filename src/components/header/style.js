import styled from "styled-components";
import logoPic from "./images/nav-logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const HeaderInner = styled.div`
  display: flex;
  max-width: 1000px;
  height: 56px;
  padding: 0 16px;
  margin: 0 auto;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
`;

export const Logo = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: 100px 56px;
  background-repeat: no-repeat;
`;
export const Nav = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
`;

export const Left = styled.div`
  float: left;
`;
export const Right = styled.div`
  float: Right;
`;
export const NavItem = styled.div`
  display: inline-block;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.home, &.download {
  color: #777;
    span {
      font-size: 24px;
    }
  }
  &.setting,&.login  {
    color: #969696;
    span {
      font-size: 24px;
    }
  }
  &.download:hover {
    background-color: #f5f5f5;
  }
   &.active span {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 20px;
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    color: #969696;
    border-radius: 50%;
    cursor: pointer;
  }
  
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 240px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  transition: width .5s;
  transition-delay: .1s;
  &::placeholder {
    color: #999;
  }
  &.focused {
     width: 320px;
    &+span {
       color: #fff;
       background-color: #969696;
    }
  }
  &.slide-enter {
    transition: width .2s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: width .2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 100%;
  left:0;
  width: 250px;
  margin-top: 9px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
  &::before {
  position: relative;
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;  
    background-color: pink;
  }
`;
export const SearchInfoList= styled.div`
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
`;

export const SearchInfoTitle = styled.div`
  height: 20px;
  margin-bottom: 10px;
  .search-hot {
    float: left;
    font-size: 14px;
    color: #969696;
  }
  .update {
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    :hover {
      color: #2f2f2f;
    }
    .spin {
      display: inline-block;
      font-size: 12px;
      margin-right: 2px;
      transition: all .4s ease-in;
     }
    
  }
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  padding: 2px 6px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: left;
  width: 80px;
  height:38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid #ec6149b3;
  border-radius: 19px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  transition: all ease-in 0.1s;
  &.sign-in {
    color: #ec6149b3;
    :hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: #ec61490d;
    }
  }
  &.writting {
    color: #fff;
    background-color: #ec6149b3;
    &:hover {
      color: #fff;
      background-color: #ec6149;
    }
  }
`;