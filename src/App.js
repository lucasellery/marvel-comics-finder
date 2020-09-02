import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Catalogo from "./Components/Catalogo";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Catalogo />
      </div>
    );
  }
}

export default App;
