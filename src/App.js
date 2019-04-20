import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import store from "./Store";
import {GlobalStyle} from "./common/styles/style";
import {GlobalIconFont} from "./common/styles/iconfont";
import {view as Header} from "./components/header";
import {view as Home} from "./page/home"
import {view as Login} from "./page/login";
import {view as Detail} from "./page/detail";
import {view as Write} from "./page/write";




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
              <Route path="/login" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail}/>
              <Route path="/write" exact component={Write}/>
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
