import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ArticleList from "../components/ArticleList";
import {
  HomeWrapper,
  HomeMain,
  HomeLeft,
  BackTop
} from "../style";
import {getArticleListAsync, handleShowScroll} from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.onClickBackTop = this.onClickBackTop.bind(this);
  }
  componentDidMount() {
    this.props.getList();
    this.bindEvents();
  }
  bindEvents() {
    let timeoutId = null;
    window.addEventListener('scroll', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if(document.documentElement.scrollTop > 100) {
          this.props.handleScrollChange(true);
        }else {
          this.props.handleScrollChange(false);
        }
      }, 150);
    });
  }
  onClickBackTop() {
    window.scroll(0, 0);
  }
  render() {
    const {topicList, showScroll} = this.props;
    return (
      <HomeWrapper>
        <HomeMain>
          <ArticleList/>
        </HomeMain>
        <HomeLeft></HomeLeft>
        {
          showScroll ? <BackTop onClick={this.onClickBackTop}>Top</BackTop> : ""
        }
      </HomeWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]).toJS(),
    showScroll: state.getIn(["home", "showScroll"])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getArticleListAsync());
    },
    handleScrollChange: (flag) => {
      dispatch(handleShowScroll(flag))
    }
  }
};

Home.propTypes = {
  topicList: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);