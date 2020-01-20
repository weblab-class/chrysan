import React, { Component } from "react";
import { Link } from "@reach/router";
import Sample from "../../sample.png"

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: Sample
    };
  }

  render() {
    return (
      <div>
          <Link to="/product/">
            <img src = {this.state.image} />
          </Link>
      </div>
    );
  }
}

export default Image;