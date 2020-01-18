import React, { Component } from "react";
import Card from "../modules/Card.js";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        this is a feed
        <Card />
      </>
    );
  }
}

export default Feed;
