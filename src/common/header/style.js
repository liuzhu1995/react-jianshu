import styled from "styled-components";
import logoPic from "../../statics/nav-logo.png";

export const HeaderWrapper = styled.div`
  position: relation;
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

export const Logo = styled.a.attrs({
  href: "/"
})`
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
  display: flex;
`;
export const NavItem = styled.a`
  display: inline-block;
  padding: 0 15px;
  height: 56px;
  line-height: 56px;
  
`;


export const SearchBar = styled.div`
  width: 100px;
`;

export const Input = styled.input`

`;