import React, {Component} from "react";
import {connect} from "react-redux";
import {getDetailDataAsync} from "../actions";
import {
  DetailWrapper,
  Header,
  Content
} from "../style";

class Detail extends Component {

  componentDidMount() {
    const {match: {params: {id}}} = this.props;
    // const {location: {search}} = this.props;
    // const id = search.replace(/[^0-9]/ig, "");
    this.props.getDetailData(id);
  }

  render() {
    const {title, content} = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailData: (id) => {
      dispatch(getDetailDataAsync(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);