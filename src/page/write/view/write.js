import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Write extends Component {

  render() {
    const {login} = this.props;
    if(login) {
      return (
        <div>Write</div>
      )
    }else {
      return (
        <Redirect to="/login"/>
      )
    }

  }
}

const mapStateTopPops = (state) => {
  return {
    login: state.getIn(["login", "login"])
  }
};
export default connect(mapStateTopPops, null)(Write);