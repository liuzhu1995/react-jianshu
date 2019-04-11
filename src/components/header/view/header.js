import React from "react";
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {serchFocus, serchBlur} from "../actions";
import {
  HeaderWrapper,
  Logo,
  Nav,
  Left,
  Right,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "../style";


const Header = ({focused, handleInputFocus, handleInputBlur}) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <Left>
          <NavItem className="home active">
            <span className="iconfont">&#xe6bd;</span>
          </NavItem>
          <NavItem className="download">
            <span className="iconfont">&#xe6db;</span>
          </NavItem>
        </Left>
        <Right>
          <NavItem className="setting">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className="login">登陆</NavItem>

        </Right>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={focused ? "focused": ""}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <span className="iconfont">&#xe6f3;</span>
        </SearchWrapper>
        <div>{focused}</div>
      </Nav>
      <Addition>
        <Button className="sign-in">注册</Button>
        <Button className="writting">写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      dispatch(serchFocus())
    },
    handleInputBlur: () => {
      dispatch(serchBlur())
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Header);