import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import {
  List,
  ListContent,
  ListTitle,
  ListAbstract,
  ListImg,
  ArticleLists,
  LoadMore
} from "../style";
import {getMoreArticleList} from "../actions";


class ArticleList extends Component {

  render() {
    const {articleList, getMoreList} = this.props;
    return (
      <div>
        <ArticleLists>
          {
            articleList.map((item, index) => {
              return (
                <List key={index}>
                  <ListContent>
                    <Link to={"/detail/" + item.id}>
                      <ListTitle >{item.title}</ListTitle>
                    </Link>
                    <ListAbstract>{item.desc}</ListAbstract>
                  </ListContent>
                  <ListImg>
                    <Link to={"/detail/" + item.id}>
                      <img src={item.imgUrl} alt=""/>
                    </Link>
                  </ListImg>
                </List>
              )
            })
          }
        </ArticleLists>
        <LoadMore onClick={getMoreList}>更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]).toJS(),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList: () => {
      dispatch(getMoreArticleList());
    }
  }
};
ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);