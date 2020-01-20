import React, { Component } from "react";
import { Link } from "@reach/router";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */
class ClothingInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          ugly sweater
          price: $10
      </div>
    );
  }
}

export default ClothingInfo;