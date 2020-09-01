import React, { Component } from "react";
import "./style.css";
import CardHq from "../CardHq";

class Catalogo extends Component {
  render() {
    return (
      <ul className="catalogo-hqs">
        <CardHq>hq 1</CardHq>
        <CardHq>hq 2</CardHq>
        <CardHq>hq 3</CardHq>
      </ul>
    );
  }
}

export default Catalogo;
