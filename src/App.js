import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import store from "./Store";
import {GlobalStyle} from "./common/styles/style";
import {GlobalIconFont} from "./common/styles/iconfont";
import {view as Header} from "./components/header";
import {view as Home} from "./page/home"
import Detail from "./page/detail/detail"




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <GlobalStyle/>
            <GlobalIconFont/>
            <Header/>
            <Route>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail}/>
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
