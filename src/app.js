import React, { Component} from "react";
import {hot} from "react-hot-loader";

import "./app.css";
import Bill from './bill';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Bill />
      </div>
    );
  }
}

export default hot(module)(App);
