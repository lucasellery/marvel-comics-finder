import React, { Component } from "react";
// import "./App.css";

class ListItem extends Component {

  render() {
    const { metaData } = this.props.comic;
    const { thumbnail, issueNumber, pageCount, dates } = metaData;

    return (
      <div className="comic">
        <div className="comic-thumbnail-container">
          <img
            className="comic-thumbnail"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="thumbnail of Deadpool"
          />
        </div>
        <div className="comic-data-container">
          <h1>{metaData.title}</h1>
          <p>Issue: {issueNumber}</p>
          <p>Page Count: {pageCount}</p>
          <p>Date: {new Date(dates[0].date).toLocaleDateString}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
