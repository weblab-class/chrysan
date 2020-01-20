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
      <div>
        <div>
          <input
            type = "text"
            // value = {this.state.inputText}
            // onChange = {this.handleInputChange}
          />
          <span>
            <button>
              search
            </button>
          </span>
        </div>
        
        <div className="Feed-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Feed;
