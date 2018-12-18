import React, { Component } from "react";
import "./App.css";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Movies - api </h1>

        <Router />
      </div>
    );
  }
}

export default App;
