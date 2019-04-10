import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from "../style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem>首页</NavItem>
          <NavItem>下载</NavItem>
          <NavItem>Aa</NavItem>
          <NavItem>登陆</NavItem>
        </Nav>
        <Logo/>
      </HeaderWrapper>
    )
  }
}

export default Header;