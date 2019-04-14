import React, {Component} from "react";
import {
  HomeWrapper,
  HomeMain,
  ArticleLists,
  ArticleList,
  ArticleListContent,
  ArticleListImg,
  ArticleListTitle,
  ArticleListAbstract,
  HomeLeft
} from "../style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeMain>
          {/*文章列表*/}
          <ArticleLists>
            <ArticleList>
              <ArticleListContent>
                <ArticleListTitle>去年9月到今年4月，我记录下了旅途中的这些小惊喜</ArticleListTitle>
                <ArticleListAbstract>
                  今天有两个简友问我怎么这么久不更文了，上次也有简友回帖说为了继续看我幸福而点了关注我，可我确实是生了孩子以后没有精力写文记录了，手机都很少拿...
                </ArticleListAbstract>
              </ArticleListContent>
              <ArticleListImg>
                <img src="//upload-images.jianshu.io/upload_images/1439852-34b485f26015b797?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
              </ArticleListImg>
            </ArticleList>
          </ArticleLists>
          <ArticleLists>
            <ArticleList>
              <ArticleListContent>
                <ArticleListTitle>去年9月到今年4月，我记录下了旅途中的这些小惊喜</ArticleListTitle>
                <ArticleListAbstract>
                  今天有两个简友问我怎么这么久不更文了，上次也有简友回帖说为了继续看我幸福而点了关注我，可我确实是生了孩子以后没有精力写文记录了，手机都很少拿...
                </ArticleListAbstract>
              </ArticleListContent>
              <ArticleListImg>
                <img src="//upload-images.jianshu.io/upload_images/1439852-34b485f26015b797?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
              </ArticleListImg>
            </ArticleList>
          </ArticleLists>
          <ArticleLists>
            <ArticleList>
              <ArticleListContent>
                <ArticleListTitle>去年9月到今年4月，我记录下了旅途中的这些小惊喜</ArticleListTitle>
                <ArticleListAbstract>
                  今天有两个简友问我怎么这么久不更文了，上次也有简友回帖说为了继续看我幸福而点了关注我，可我确实是生了孩子以后没有精力写文记录了，手机都很少拿...
                </ArticleListAbstract>
              </ArticleListContent>
              <ArticleListImg>
                <img src="//upload-images.jianshu.io/upload_images/1439852-34b485f26015b797?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
              </ArticleListImg>
            </ArticleList>
          </ArticleLists>
        </HomeMain>
        <HomeLeft></HomeLeft>
      </HomeWrapper>
    )
  }
}

export default Home;