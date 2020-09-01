import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Catalogo from "./Components/Catalogo";
import { Component } from "react";
import Quadrinho from "./dados/Quadrinho";
// import Catalogo from "./Components/Catalogo";

class App extends Component {

  constructor() {
    super();
    this.quadrinhos = new Quadrinho();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Input />

        <Catalogo 
          hqs={this.quadrinhos.hqs}
        />

        {/* <Link to="/sobre"> Ir para página sobre</Link> */}
      </div>
    );
  }
}

export default App;
