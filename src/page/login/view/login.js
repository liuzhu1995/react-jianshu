import React, {Component} from "react";
import {connect} from "react-redux";
import {login} from  "../actions";
import {
  LoginWrapper,
  LoginBox,
  Input,
  LoginBtn
} from "../style";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      account: "ww",
      password: ""
    }
  }
  handleAccountChange(event) {
    this.setState({account: event.target.value})
  }
  handlePasswordChange(event) {
    console.log(event.target, "p");
    this.setState({password: event.target.value})
  }

  render() {
    const {login, handleLogin} = this.props;
    const { account, password,} = this.state;
    return (
      <LoginWrapper>
        <LoginBox>
          <div className="inputWrapper">
            <Input
              placeholder="账号"
              defaultValue={account}
              onChange={this.handleAccountChange}
            />
          </div>
          <div className="inputWrapper">
            <Input
              placeholder="密码"
              defaultValue={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <LoginBtn onClick={() => handleLogin(account, password)}>登陆</LoginBtn>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.getIn(["login", "login"])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (account, password) => {
      console.log(account, password);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);