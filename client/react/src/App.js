import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
