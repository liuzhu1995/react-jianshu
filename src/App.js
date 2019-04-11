import React, { Component } from 'react';
import {GlobalStyle} from "./common/styles/style";
import {GlobalIconFont} from "./common/styles/iconfont";
import {view as Header} from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <GlobalIconFont/>
        <Header/>
      </div>
    );
  }
}

export default App;
