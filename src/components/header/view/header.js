import React, {Component} from "react";
import PropTypes from "prop-types"
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {actions} from "@/page/login";
import {
  searchFocus,
  searchBlur,
  searchFocusAsync,
  mouseEnter,
  mouseLeave,
  changePage
} from "../actions";
import {
  HeaderWrapper,
  Logo,
  Nav,
  Left,
  Right,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoItem,
  Addition,
  Button
} from "../style";



class Header extends Component {
  constructor(props) {
    super(props);
    this.getListArea = this.getListArea.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
  }
  handleClickPage(page, totalPage,spinIcon) {
    return () => {
      this.props.handleChangePage(page, totalPage, spinIcon)
    }
  }

  getListArea() {
    const {
      mouseIn,
      list,
      page,
      totalPage,
      focused,
      handleMouseEnter,
      handleMouseLeave,
    } = this.props;
    let pageList =  [];
    const newList = list.toJS();
    if(newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if(newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }

      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoList>
            <SearchInfoTitle>
              <span className="search-hot">热门搜索</span>
              <span className="update" onClick={this.handleClickPage(page, totalPage, this.spinIcon)}><i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe7e9;</i>换一换</span>
            </SearchInfoTitle>
            <div>
              {pageList}
            </div>
          </SearchInfoList>

        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    const {
      list,
      login,
      focused,
      handleInputFocus,
      handleInputBlur,
      handleLogOut
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>

        <Nav>
          <Left>
            <Link to="/">
              <NavItem className="home active">
                <span className="iconfont">&#xe6bd;</span>
              </NavItem>
            </Link>
            <Link to="/detail">
              <NavItem className="download">
                <span className="iconfont">&#xe6db;</span>
              </NavItem>
            </Link>
          </Left>
          <Right>
            <NavItem className="setting">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            {
              login ?  <NavItem onClick={handleLogOut}>退出</NavItem> : <Link to="/login">
                        <NavItem className="login">登陆</NavItem>
              </Link>
            }

          </Right>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused": ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className="iconfont zoom">&#xe6f3;</span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="sign-in">注册</Button>
          <Link to="/write">
            <Button className="writting">写文章</Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header","focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      !list.size && dispatch(searchFocusAsync());
      dispatch(searchFocus());
    },
    handleInputBlur: () => {
      dispatch(searchBlur());
    },
    handleMouseEnter: () => {
      dispatch(mouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(mouseLeave())
    },
    handleChangePage: (page, totalPage, spinIcon) => {
      let originAngle = Number(spinIcon.style.transform.replace(/[^0-9]/ig, ""));
      originAngle += 360;
      spinIcon.style.transform = `rotate(${originAngle}deg)`;
      if(page < totalPage) {
        dispatch(changePage(page + 1))
      }else {
        dispatch(changePage(1))
      }
    },
    handleLogOut: () => {
      dispatch(actions.loginOut())
    }
  }
};



Header.propTypes = {
  focused: PropTypes.bool.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  handleInputBlur: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  mouseIn: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);