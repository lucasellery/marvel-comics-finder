import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Header from "./Components/Header";
import { comics } from "./Comics";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.selected.length}</p>
        <div className="store-container">
          <h1>All Comics</h1>
          <List
            result={comics().data.results}
            onSelect={this.handleSelection}
          />
        </div>
        <div className="owned-container">
          <h1>MY Comics</h1>
          <List result={comics().data.results} />
        </div>
      </div>
    );
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index),
    });
  }
}

export default App;
