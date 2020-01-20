import React, { Component } from "react";
import Card from "../modules/Card.js";

import "./Feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Feed-container">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Feed;
