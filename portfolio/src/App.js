import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
