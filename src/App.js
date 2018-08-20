import React, { Component } from 'react';

import AddToDoFiled from './components/AddToDoField'
import DisplayButtons from './components/DisplayButtons'
import NavBar from './components/NavBar'
import LeftNavBar from './components/LeftNavBar'
class App extends Component {
  render() {
    return (
      <div className="main-container container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-sm-3">
          <LeftNavBar />
          </div>
          <div className="col-sm-9 jumbotron">
            <AddToDoFiled />
            <DisplayButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
