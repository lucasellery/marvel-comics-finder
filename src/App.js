import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Catalogo from "./Components/Catalogo";
import { Component } from "react";
// import Catalogo from "./Components/Catalogo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Catalogo />
      </div>
    );
  }
}

export default App;
